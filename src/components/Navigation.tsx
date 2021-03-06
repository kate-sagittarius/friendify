import React from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import clsx from 'clsx';
import { fade, makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import SearchIcon from '@material-ui/icons/Search';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import PeopleAltRoundedIcon from '@material-ui/icons/PeopleAltRounded';
import ChatRoundedIcon from '@material-ui/icons/ChatRounded';
import MoreIcon from '@material-ui/icons/MoreVert';
import { setQuery } from '../store/reducers/searchQuery';


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        grow: {
            flexGrow: 1,
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            display: 'none',
            [theme.breakpoints.up('sm')]: {
                display: 'block',
            },
            fontFamily: "'Black Ops One', cursive",
        },
        search: {
            position: 'relative',
            borderRadius: theme.shape.borderRadius,
            backgroundColor: fade(theme.palette.common.white, 0.15),
            '&:hover': {
                backgroundColor: fade(theme.palette.common.white, 0.25),
            },
            marginRight: theme.spacing(2),
            marginLeft: 0,
            width: '100%',
            [theme.breakpoints.up('sm')]: {
                marginLeft: theme.spacing(3),
                width: 'auto',
            },
        },
        searchIcon: {
            padding: theme.spacing(0, 2),
            height: '100%',
            position: 'absolute',
            pointerEvents: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        inputRoot: {
            color: 'inherit',
        },
        inputInput: {
            padding: theme.spacing(1, 1, 1, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
            transition: theme.transitions.create('width'),
            width: '100%',
            [theme.breakpoints.up('md')]: {
                width: '20ch',
            },
        },
        sectionDesktop: {
            display: 'none',
            [theme.breakpoints.up('md')]: {
                display: 'flex',
            },
        },
        sectionMobile: {
            display: 'flex',
            [theme.breakpoints.up('md')]: {
                display: 'none',
            },
        },
        invisible: {
            display: 'none',
        },
        friendify: {
          display: 'flex',
        },
        logo: {
            marginRight: 12,
            width: 30,
            height: 30,
        },
    }),
);

type PrimarySearchAppBarProps = {
    showSearch?: boolean;
    query: string;
    onSearch: (query: string) => void;
}

function Navigation(props: PrimarySearchAppBarProps) {
    const classes = useStyles();
    const [, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState<null | HTMLElement>(null);

    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const menuId = 'primary-search-account-menu';

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <Link to="/">
                <MenuItem>
                    <IconButton aria-label="show 4 new mails" color="inherit">
                        <HomeRoundedIcon />
                    </IconButton>
                    <p>Home</p>
                </MenuItem>
            </Link>
            <Link to="/users">
                <MenuItem>
                    <IconButton aria-label="show 11 new notifications" color="inherit">
                        <PeopleAltRoundedIcon />
                    </IconButton>
                    <p>Users</p>
                </MenuItem>
            </Link>
            <Link to="/posts">
                <MenuItem onClick={handleProfileMenuOpen}>
                    <IconButton
                        aria-label="account of current user"
                        aria-controls="primary-search-account-menu"
                        aria-haspopup="true"
                        color="inherit"
                    >
                        <ChatRoundedIcon />
                    </IconButton>
                    <p>Posts</p>
                </MenuItem>
            </Link>
        </Menu>
    );

    return (
        <div className={''}>
            <AppBar position="sticky">
                <Toolbar>
                    <Link to="/">
                        <div className={classes.friendify}>
                            <img
                                src={process.env.PUBLIC_URL + '/images/logo.png'}
                                alt={'Chat'}
                                title={'Chat'}
                                className={classes.logo}
                            />
                            <Typography className={classes.title} variant="h6" noWrap>
                                Friendify
                            </Typography>
                        </div>
                    </Link>
                    <div className={clsx(classes.search, {[classes.invisible]: !props.showSearch})}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase
                            placeholder="Search…"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{ 'aria-label': 'search' }}
                            value={props.query}
                            onChange={(event) => props.onSearch(event.target.value)}
                        />
                    </div>
                    <div className={classes.grow} />
                    <div className={classes.sectionDesktop}>
                        <Link to="/">
                            <IconButton aria-label="show 4 new mails" color="inherit">
                                <HomeRoundedIcon />
                            </IconButton>
                        </Link>
                        <Link to="/users">
                            <IconButton aria-label="show 17 new notifications" color="inherit">
                                <PeopleAltRoundedIcon />
                            </IconButton>
                        </Link>
                        <Link to="/posts">
                            <IconButton
                                edge="end"
                                aria-label="account of current user"
                                aria-controls={menuId}
                                aria-haspopup="true"
                                onClick={handleProfileMenuOpen}
                                color="inherit"
                            >
                                <ChatRoundedIcon />
                            </IconButton>
                        </Link>
                    </div>
                    <div className={classes.sectionMobile}>
                        <IconButton
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="inherit"
                        >
                            <MoreIcon />
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
            {renderMobileMenu}
        </div>
    );
}

const mapStateToProps = (state: any) => {
    return {
        query: state.query,
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        onSearch: (query: string) => dispatch(setQuery(query)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);

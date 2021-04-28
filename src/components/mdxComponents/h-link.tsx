/*
 * Copyright 2018- The Pixie Authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * SPDX-License-Identifier: Apache-2.0
 */

/*
 * Copyright The Pixie Authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import * as React from 'react';
import { makeStyles, TypographyVariant } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import clipLink from '../../images/clip-link.png';

const useStyles = makeStyles(() => ({
  linkContainer: {
    '&:hover': {
      '& a': {
        opacity: 1,
      },
    },
  },
  tocAnchor: {
    display: 'block',
    position: 'relative',
    top: '-100px',
  },
  link: {
    color: 'inherit',
    display: 'inline',
    opacity: 0,
    marginLeft: '10px',
    position: 'relative',
    '& img': {
      height: '70%',
      position: 'absolute',
      bottom: '15%',
    },
  },
}));

interface Props {
  id: string;
  variant: TypographyVariant
}

const HLink: React.FC<Props> = ({ id, children, variant }) => {
  const classes = useStyles();
  return (
    <div className={classes.linkContainer}>
      <span className={classes.tocAnchor} id={id} />
      <Typography variant={variant}>
        {children}
        {children && <a href={`#${id}`} className={classes.link}><img src={clipLink} alt='' /></a>}
      </Typography>
    </div>
  );
};

export default HLink;

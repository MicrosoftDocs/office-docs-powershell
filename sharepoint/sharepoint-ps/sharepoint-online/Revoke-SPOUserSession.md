---
external help file: 
applicable: SharePoint Online
title: Revoke-SPOUserSession
schema: 2.0.0
---

# Revoke-SPOUserSession

## SYNOPSIS
Provides IT administrators the ability to invalidate a particular users' O365 sessions across all their devices. 


## SYNTAX

```
Revoke-SPOUserSession [-User] <String> [-Confirm] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
You must be a SharePoint Online global administrator to run the cmdlet.

Requires a valid `Connect-SPOService` context to identify the tenant. For information about how to connect to the tenant, see `Connect-SPOService`.

When the cmdlet is ran the following will occur: 

User will be signed out of browser, desktop and mobile applications accessing Office 365 resources across all devices. 

Will not be applicable for guest users.

Possible results for this cmdlet are: 

Results                        														   				Reason
 
Warning : We couldn't find the user@contoso.com. Check for typos and try again.         			Invalid input for -User parameter. 
 
We successfully signed out <user> from all devices. 												Successful instantaneous revocation. 

It can take up to an hour to sign out <user> from all devices. 										Successful non-instantaneous revocation. 

Sorry, something went wrong and we couldn't sign out <user> from any device. 						The cmdlet did not successfully execute. 

The cmdlet will be available in the future, but it isn't ready for use in your organization yet.    The cmdlet has been disabled for the tenant.


## EXAMPLES

### ----------------------EXAMPLE-----------------------
```
Revoke-SPOUserSession -User user1@contoso.com
```
This example signs out user1 in the contoso tenancy from all devices. 


## PARAMETERS

### -Confirm
Prompts you for confirmation before running the cmdlet.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: SharePoint Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -User
Specifies a user name. For example, user1@contoso.com


```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Online

Required: True
Position: 0
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
Shows what would happen if the cmdlet runs.
The cmdlet is not run.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
Applicable: SharePoint Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### None

## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS

---
external help file: 
applicable: SharePoint Online
title: Get-SPOUser
schema: 2.0.0
---

# Get-SPOUser

## SYNOPSIS
Returns the SharePoint Online user or security group accounts that match a given search criteria.


## SYNTAX

### ByGroup
```
Get-SPOUser [-Group <String>] [-Limit <String>] -Site <SpoSitePipeBind> [<CommonParameters>]
```

### All
```
Get-SPOUser [-Limit <String>] -Site <SpoSitePipeBind> [<CommonParameters>]
```

### ByLogin
```
Get-SPOUser [-LoginName <String>] -Site <SpoSitePipeBind> [<CommonParameters>]
```

## DESCRIPTION
This cmdlet contains more than one parameter set.
You may only use parameters from one parameter set and you may not combine parameters from different parameter sets.
For more information about how to use parameter sets, see Cmdlet Parameter Sets (http://go.microsoft.com/fwlink/?LinkID=187810).

The `Get-SPOUser` cmdlet matches one and only one user or security group.

You must be a SharePoint Online global administrator and a site collection administrator to run the `Get-SPOUser` cmdlet.

For permissions and the most current information about Windows PowerShell for SharePoint Online, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251832 (http://go.microsoft.com/fwlink/p/?LinkId=251832).


## EXAMPLES

### -----------------------EXAMPLE 1-----------------------------
```
Get-SPOUser -Site https://contoso.sharepoint.com/sites/finance
```
Example 1 returns all user or security group accounts from the site collection http://contoso.sharepoint.com/sites/finance. 


### -----------------------EXAMPLE 2-----------------------------
```
Get-SPOUser -Site https://contoso.sharepoint.com/sites/finance -LoginName melissa.kerr@contoso.com
```
Example 2 returns one user or security group account whose user name is HYPERLINK "mailto:melissa.kerr@contoso.com" melissa.kerr@contoso.com from the site collection https://contoso.sharepoint.com/sites/finance.


### -----------------------EXAMPLE 3-----------------------------
```
Get-SPOUser -Site https://contoso.sharepoint.com/sites/finance -Group "Team Site Members"
```
Example 3 returns one user or security group account inside group Team Site Members from the site collection http://contoso.sharepoint.com/sites/finance. 

## PARAMETERS

### -Group
Specifies the group to get the users from.


```yaml
Type: String
Parameter Sets: ByGroup
Aliases: 
Applicable: SharePoint Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Limit
Specifies the maximum number of users returned. The default value is to return 500 users. To return all users specify the value “All”. 


```yaml
Type: String
Parameter Sets: ByGroup, All
Aliases: 
Applicable: SharePoint Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LoginName
Specifies the user name.


```yaml
Type: String
Parameter Sets: ByLogin
Aliases: 
Applicable: SharePoint Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Site
Specifies the URL of the site collection to get the user from.


```yaml
Type: SpoSitePipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

[Introduction to the SharePoint Online management shell]()

[Set up the SharePoint Online Management Shell Windows PowerShell environment]()

[Get-SPOAppErrors](Get-SPOAppErrors.md)

[Remove-SPOUser](Remove-SPOUser.md)

[Set-SPOUser](Set-SPOUser.md)

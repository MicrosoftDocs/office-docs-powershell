---
external help file: 
applicable: SharePoint Online
title: New-SPOSiteGroup
schema: 2.0.0
---

# New-SPOSiteGroup

## SYNOPSIS
Creates a new group in a SharePoint Online site collection.


## SYNTAX

```
New-SPOSiteGroup -Group <String> -PermissionLevels <String[]> -Site <SpoSitePipeBind> [<CommonParameters>]
```

## DESCRIPTION
A SharePoint group is a set of individual users.
SharePoint groups enable you to manage sets of users instead of individual users.

You must be a SharePoint Online global administrator and a site collection administrator to run the cmdlet.

For permissions and the most current information about Windows PowerShell for SharePoint Online, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251832 (http://go.microsoft.com/fwlink/p/?LinkId=251832).


## EXAMPLES

### -----------------------EXAMPLE 1-----------------------------
```
New-SPOSiteGroup -Site https://contoso.sharepoint.com/sites/siteA -Group "Project Leads" -PermissionLevels "Full Control"
```

This example creates a group named Project Leads with the Full Control permission level on the site collection https://contoso.sharepoint.com/sites/siteA.

### -----------------------EXAMPLE 2-----------------------------
```
New-SPOSiteGroup -Site https://contoso.sharepoint.com/sites/marketing -Group "NewGroupName" -PermissionLevels "Design"
```
This example creates a group named NewGroupName with the Design permission level on the site collection https://contoso.sharepoint.com/sites/marketing.


## PARAMETERS

### -Group
Specifies the name of the group to add.


```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PermissionLevels
Specifies the permission levels to grant to the newly created group. It can be any permission level that exists on the site collection on which the group is being created.

Note:  
Permission levels are defined by SharePoint Online administrators in the SharePoint Online Administration Center.  


```yaml
Type: String[]
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Site
Specifies the site collection to add the group to.


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

[New-SPOSite](New-SPOSite.md)

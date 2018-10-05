---
external help file: 
applicable: SharePoint Server 2013, SharePoint Server 2016
title: Remove-SPAppPrincipalPermission
schema: 2.0.0
---

# Remove-SPAppPrincipalPermission

## SYNOPSIS
Removes the permissions on a specified app principal.


## SYNTAX

```
Remove-SPAppPrincipalPermission -AppPrincipal <SPAppPrincipal> -Scope <SPCmdletAppPrincipalPermissionScope>
 -Site <SPWebPipeBind> [-AssignmentCollection <SPAssignmentCollection>] [-Confirm] [-WhatIf]
 [-DisableAppOnlyPolicy] [<CommonParameters>]
```

## DESCRIPTION
Use the `Remove-SPAppPrincipalPermission` cmdlet to remove the permissions on a specified app principal for a given scope (that is, SharePoint Online, site collection, or web).

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).


## EXAMPLES

### ---------------EXAMPLE------------
```
PS C:\>$clientID = "11111111-2222-3333-4444-555555555555"
PS C:\>$site = Get-SPSite http://siteUrl
PS C:\>$realm = Get-SPAuthenticationRealm -ServiceContext $site
PS C:\>$appIdentifier = $clientID + "@" + $realm
PS C:\>$appPrincipal = Get-SPAppPrincipal -NameIdentifier $appIdentifier -Web $site.RootWeb
PS C:\>Remove-AppPrincipalPermission -AppPrincipal $appPrincipal -site $site.RootWeb -Scope Site
```

This example removes the App Principal permission from the site collection scope.


## PARAMETERS

### -AppPrincipal
Specifies the AppPrincipal object to remove.

```yaml
Type: SPAppPrincipal
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -Scope
Specifies the scope to which to apply the principal permission.

The value is any of the following scopes:

--Site

--SiteCollection

--SiteSubscription

```yaml
Type: SPCmdletAppPrincipalPermissionScope
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Site
Specifies the site (that is, SPWeb object) to remove.

```yaml
Type: SPWebPipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AssignmentCollection
Manages objects for the purpose of proper disposal. Use of objects, such as SPWeb or SPSite, can use large amounts of memory and use of these objects in Windows PowerShell scripts requires proper memory management. Using the SPAssignment object, you can assign objects to a variable and dispose of the objects after they are needed to free up memory. When SPWeb, SPSite, or SPSiteAdministration objects are used, the objects are automatically disposed of if an assignment collection or the Global parameter is not used.

When the Global parameter is used, all objects are contained in the global store. If objects are not immediately used, or disposed of by using the Stop-SPAssignment command, an out-of-memory scenario can occur.

```yaml
Type: SPAssignmentCollection
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -Confirm
Prompts you for confirmation before executing the command.
For more information, type the following command: `get-help about_commonparameters`

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
Displays a message that describes the effect of the command instead of executing the command.
For more information, type the following command: `get-help about_commonparameters`

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DisableAppOnlyPolicy
Disables the app only policy.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
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

[Set-SPAppPrincipalPermission](Set-SPAppPrincipalPermission.md)

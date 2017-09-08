---
external help file: sharepoint.xml
online version: 
schema: 2.0.0
---

# Set-SPAppPrincipalPermission

## SYNOPSIS
Below Content Applies To: SharePoint Server 2013

## SYNTAX

```
Set-SPAppPrincipalPermission -AppPrincipal <SPAppPrincipal> -Right <SPCmdletAppPrincipalPermissionKind>
 -Scope <SPCmdletAppPrincipalPermissionScope> -Site <SPWebPipeBind>
 [-AssignmentCollection <SPAssignmentCollection>] [-Confirm] [-WhatIf] [-EnableAppOnlyPolicy]
```

## DESCRIPTION
Use the Set-SPAppPrincipalPermission cmdlet to set the permissions on a given app principal for a given scope (tenant, site collection, and web) and given levels (Read, Write, Manage, Full Control).

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).

## EXAMPLES

### ---------------EXAMPLE------------- (SharePoint Server 2013)
```
C:\PS>$appPrincipal= Get-SPApplicationPrincipal -nameIdentifier $spTrustedIssuer.nameIdentifier -web $site.rootWeb

C:\PS>Set-AppPrincipalPermission -appPrincipal $appPrincipal -site $site.rootweb -scope "spweb" -level "WRITE"
```

This example sets the Write permission level of  to the SPWeb scope.

### ---------------EXAMPLE------------- (SharePoint Server 2016)
```
C:\PS>$appPrincipal= Get-SPApplicationPrincipal -nameIdentifier $spTrustedIssuer.nameIdentifier - web $site.rootWeb

C:\PS>Set-AppPrincipalPermission -appPrincipal $appPrincipal -site $site.rootweb -scope "spweb" -level "WRITE"
```

This example sets the Write permission level of  to the SPWeb scope.

## PARAMETERS

### -AppPrincipal
Specifies the AppPrincipal object.

```yaml
Type: SPAppPrincipal
Parameter Sets: (All)
Aliases: 

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -Right
Specifies the permission level for the principal object.

The value is any of the following levels:

----Read
--Write
--Manage
--Full Control

```yaml
Type: SPCmdletAppPrincipalPermissionKind
Parameter Sets: (All)
Aliases: 

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Scope
Specifies the scope to which to apply the principal permission.

The value is any of the following scopes:

--Farm
--Site collection
--SharePoint Online
--Web
--Documents, List, or Library

```yaml
Type: SPCmdletAppPrincipalPermissionScope
Parameter Sets: (All)
Aliases: 

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Site
@{Text=}

```yaml
Type: SPWebPipeBind
Parameter Sets: (All)
Aliases: 

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AssignmentCollection
Manages objects for the purpose of proper disposal.
Use of objects, such as SPWeb or SPSite, can use large amounts of memory and use of these objects in Windows PowerShell scripts requires proper memory management.
Using the SPAssignment object, you can assign objects to a variable and dispose of the objects after they are needed to free up memory.
When SPWeb, SPSite, or SPSiteAdministration objects are used, the objects are automatically disposed of if an assignment collection or the Global parameter is not used.

When the Global parameter is used, all objects are contained in the global store.
If objects are not immediately used, or disposed of by using the Stop-SPAssignment command, an out-of-memory scenario can occur.

```yaml
Type: SPAssignmentCollection
Parameter Sets: (All)
Aliases: 

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -Confirm
Prompts you for confirmation before executing the command.
For more information, type the following command: get-help about_commonparameters

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
Displays a message that describes the effect of the command instead of executing the command.
For more information, type the following command: get-help about_commonparameters

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnableAppOnlyPolicy
{{Fill EnableAppOnlyPolicy Description}}

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

[Remove-SPAppPrincipalPermission]()


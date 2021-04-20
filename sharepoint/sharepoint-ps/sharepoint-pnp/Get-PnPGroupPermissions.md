---
Module Name: PnP.PowerShell
schema: 2.0.0
applicable: SharePoint Online
online version: https://pnp.github.io/powershell/cmdlets/Get-PnPGroupPermissions.html
external help file: PnP.PowerShell.dll-Help.xml
title: Get-PnPGroupPermissions
---
  
# Get-PnPGroupPermissions

## SYNOPSIS

> [!TIP]
> We encourage you to make improvements to this documentation. Please navigate to https://github.com/pnp/powershell/blob/dev/documentation/Get-PnPGroupPermissions.md to change this file.

Returns the permissions for a specific SharePoint group

## SYNTAX

```powershell
Get-PnPGroupPermissions [-Identity] <GroupPipeBind> [-Connection <PnPConnection>]
 [<CommonParameters>]
```

## DESCRIPTION

## EXAMPLES

### EXAMPLE 1
```powershell
Get-PnPGroupPermissions -Identity 'My Site Members'
```

Returns the permissions for the SharePoint group with the name 'My Site Members'

## PARAMETERS

### -Connection
Optional connection to be used by the cmdlet. Retrieve the value for this parameter by either specifying -ReturnConnection on Connect-PnPOnline or by executing Get-PnPConnection.

```yaml
Type: PnPConnection
Parameter Sets: (All)

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
Get the permissions of a specific group by name

```yaml
Type: GroupPipeBind
Parameter Sets: (All)
Aliases: Name

Required: True
Position: 0
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```



## RELATED LINKS

[Microsoft 365 Patterns and Practices](https://aka.ms/m365pnp)



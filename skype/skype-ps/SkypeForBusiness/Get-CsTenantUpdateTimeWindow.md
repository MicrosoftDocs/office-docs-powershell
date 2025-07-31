---
applicable: Skype for Business Online
author: tomkau
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
Locale: en-US
manager: bulenteg
Module Name: SkypeForBusiness
ms.author: tomkau
ms.reviewer: williamlooney
online version: https://learn.microsoft.com/powershell/module/skype/get-cstenantupdatetimewindow
schema: 2.0.0
title: Get-CsTenantUpdateTimeWindow
---

# Get-CsTenantUpdateTimeWindow

## SYNOPSIS
Use the Get-CsTenantUpdateTimeWindow cmdlet to retrieve information about your tenant update time windows.

## SYNTAX

### Identity (Default)
```
Get-CsTenantUpdateTimeWindow [-Tenant <Guid>] [[-Identity] <XdsGlobalRelativeIdentity>] [-LocalStore]
 [<CommonParameters>]
```

### Filter
```
Get-CsTenantUpdateTimeWindow [-Tenant <Guid>] [-Filter <String>] [-LocalStore] [<CommonParameters>]
```

## DESCRIPTION
Tenant update time windows are created, retrieved, modified, and deleted by the CsTenantUpdateTimeWindow cmdlet group (New, Get, Set, and Remove).
The tenant update time windows can be reviewed in your hybrid configuration by using the Get-CsTenantHybridConfiguration cmdlet.
However, you can't create or modify tenant update time windows through the CsTenantHybridConfiguration cmdlets.
You must use the CsTenantUpdateTimeWindow cmdlets to manage tenant update time windows.

To return a list of all the Role-Based Access Control (RBAC) roles a cmdlet has been assigned, run the following command:

`Get-CsAdminRole | Where-Object {$_.Cmdlets -Match "\<CmdletName\>"}`

## EXAMPLES

### Example 1
```
Get-CsTenantUpdateTimeWindow
```

The command shown in Example 1 returns information for all the tenant update time windows.

### Example 2
```
Get-CsTenantUpdateTimeWindow -Identity "AlwaysOn"
```

The command shown in Example 2 returns information for the tenant update time window with the given identity.


## PARAMETERS

### -Filter

> Applicable: Skype for Business Online

PARAMVALUE: String

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity

> Applicable: Skype for Business Online

Specifies the identity of the tenant update time window.

```yaml
Type: XdsGlobalRelativeIdentity
Parameter Sets: (All)
Aliases:

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LocalStore

> Applicable: Skype for Business Online

PARAMVALUE: SwitchParameter

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Tenant

> Applicable: Skype for Business Online

PARAMVALUE: Guid

```yaml
Type: Guid
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

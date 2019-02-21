---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml 
applicable: Skype for Business Online
title: Get-CsCallerIdPolicy
schema: 2.0.0
author: kenwith
ms.author: kenwith
ms.reviewer:
---

# Get-CsCallerIdPolicy

## SYNOPSIS
Use the `Get-CsCalleridPolicy` cmdlet to display the Caller ID policies for your organization.

## SYNTAX

### Identity (Default)
```
Get-CsCallerIdPolicy [-Tenant <Guid>] [[-Identity] <XdsIdentity>] [-LocalStore] [<CommonParameters>]
```

### Filter
```
Get-CsCallerIdPolicy [-Tenant <Guid>] [-Filter <String>] [-LocalStore] [<CommonParameters>]
```

## DESCRIPTION
By default, Client policies are applied each time a user accesses the system, regardless of where the user logs on from and regardless of the type of device the user logs on with. Client policies can be configured at the global, site and per-user scopes.


## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-CsCallerIdPolicy
```

The example gets and displays the Caller ID policies for your organization.


## PARAMETERS

### -Filter
PARAMVALUE: String

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
PARAMVALUE: XdsIdentity

```yaml
Type: XdsIdentity
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LocalStore
PARAMVALUE: SwitchParameter

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Tenant
PARAMVALUE: Guid

```yaml
Type: Guid
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

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


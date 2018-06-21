---
external help file: Microsoft.Rtc.Management.dll-help.xml
applicable: Skype for Business Server 2015, Skype for Business Server 2019
title: Get-CsImConfiguration
schema: 2.0.0
---

# Get-CsImConfiguration

## SYNOPSIS
Use the Get-CsImConfiguration cmdlet to retrieve information about Instant Messaging (IM) configurations.

## SYNTAX

### Filter
```
Get-CsImConfiguration [-Filter <String>] [-LocalStore] [-Tenant <Guid>] [<CommonParameters>]
```

### Identity
```
Get-CsImConfiguration [[-Identity] <XdsIdentity>] [-LocalStore] [-Tenant <Guid>] [<CommonParameters>]
```

## DESCRIPTION
Use the Get-CsImConfiguration cmdlet to retrieve information about Instant Messaging (IM) configurations.

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-CsImConfiguration
```

This example returns information for all Instant Messaging (IM) configurations in your organization.

## PARAMETERS

### -Filter
Enables you to use wildcard characters in order to return a collection of items. For instance the following usage specifies all the site scoped IM configurations: -Filter "site:*" . Filter and Identity are mutually exclusive.

```yaml
Type: String
Parameter Sets: Filter
Aliases: 
Applicable: Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
A unique identifier specifying the scope and, in some cases the name, of the IM configuration. If this parameter is omitted, all IM configurations for the organization are returned.


```yaml
Type: XdsIdentity
Parameter Sets: Identity
Aliases: 
Applicable: Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LocalStore
Presence of this switch causes the cmdlet to retrieve information from the local replica of the Central Management store, rather than from Central Management store itself. 

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Tenant
This parameter is reserved for internal Microsoft use.

```yaml
Type: Guid
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Server 2015, Skype for Business Server 2019

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
[New-CsImConfiguration](https://docs.microsoft.com/en-us/powershell/module/skype/new-csimconfiguration?view=skype-ps)

[Set-CsImConfiguration](https://docs.microsoft.com/en-us/powershell/module/skype/set-csimconfiguration?view=skype-ps)

[Remove-CsImConfiguration](https://docs.microsoft.com/en-us/powershell/module/skype/remove-csimconfiguration?view=skype-ps)

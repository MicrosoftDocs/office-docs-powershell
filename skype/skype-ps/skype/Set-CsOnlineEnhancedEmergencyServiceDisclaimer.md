---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml 
online version: https://docs.microsoft.com/powershell/module/skype/set-csonlineenhancedemergencyservicedisclaimer
applicable: Skype for Business Online, Microsoft Teams
title: Set-CsOnlineEnhancedEmergencyServiceDisclaimer
schema: 2.0.0
manager: bulenteg
author: tomkau
ms.author: tomkau
ms.reviewer:
---

# Set-CsOnlineEnhancedEmergencyServiceDisclaimer

## SYNOPSIS
When using Microsoft Teams PSTN Calling Services you need to record your organization's acceptance of the enhanced emergency service terms and conditions. This is done per
country and it needs to be done before you can provide PSTN calling services to Microsoft Teams users in the country.

You can record your organization's acceptance using the Set-CsOnlineEnhancedEmergencyServiceDisclaimer cmdlet at any time. If you haven't accepted it for a given country
you will be prompted to do so by warning information in the Teams PS Module, when you try to assign a phone number to a Microsoft Teams user, or in the Teams admin center,
when you create an emergency address in a country.

Any tenant administrator can accept the terms and conditions and it only needs to be done once per country.

As the output the cmdlet will show the emergency service disclaimer and that it has been accepted. You can use Get-CsOnlineEnhancedEmergencyServiceDisclaimer to see the status of the emergency service disclaimer.

## SYNTAX

```
Set-CsOnlineEnhancedEmergencyServiceDisclaimer -CountryOrRegion <String> [-Version <String>] [-ForceAccept]
 [-Tenant <Guid>] [-DomainController <Fqdn>] [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
You must run this cmdlet prior to assigning Microsoft Calling Plan phone numbers and locations to voice enabled users or accept the similar disclaimer in the Teams admin center.

Microsoft Calling Plan phone numbers are available in several countries, see [Country and region availability for Audio Conferencing and Calling Plans](https://docs.microsoft.com/MicrosoftTeams/country-and-region-availability-for-audio-conferencing-and-calling-plans/country-and-region-availability-for-audio-conferencing-and-calling-plans)


## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Set-CsOnlineEnhancedEmergencyServiceDisclaimer -CountryOrRegion US
```

This example accepts the U.S.
version of the enhanced emergency service terms and conditions.


## PARAMETERS

### -CountryOrRegion
Specifies the region or country whose terms and conditions you wish to accept. You need to use the ISO 31661-1 alpha-2 2 letter code for the country. For example for the United States it must be specified as "US" and for Denmark it must be specified as "DK".

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online, Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
The Confirm switch causes the command to pause processing and requires confirmation to proceed.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Skype for Business Online, Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController
This parameter is reserved for internal Microsoft use.

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases: DC
Applicable: Skype for Business Online, Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
The Force switch specifies whether to suppress warning and confirmation messages.
It can be useful in scripting to suppress interactive prompts.
If the Force switch isn't provided in the command, you're prompted for administrative input if required.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online, Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ForceAccept
This parameter is reserved for internal Microsoft use.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online, Microsoft Teams

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
Applicable: Skype for Business Online, Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Version
This parameter is reserved for internal Microsoft use.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online, Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
The WhatIf switch causes the command to simulate its results.
By using this switch, you can view what changes would occur without having to commit those changes.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
Applicable: Skype for Business Online, Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

###  
None

## OUTPUTS

###  
None

## NOTES

## RELATED LINKS
[Get-CsOnlineEnhancedEmergencyServiceDisclaimer](Get-CsOnlineEnhancedEmergencyServiceDisclaimer.md)

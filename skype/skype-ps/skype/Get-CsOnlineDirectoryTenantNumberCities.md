---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml 
online version: https://docs.microsoft.com/powershell/module/skype/get-csonlinedirectorytenantnumbercities
applicable: Skype for Business Online
title: Get-CsOnlineDirectoryTenantNumberCities
schema: 2.0.0
manager: bulenteg
author: tomkau
ms.author: tomkau
ms.reviewer:
---

# Get-CsOnlineDirectoryTenantNumberCities

## SYNOPSIS
Use the Get-CsOnlineDirectoryTenantNumberCities cmdlet to retrieve the cities for which telephone numbers have been acquired by your organization.

## SYNTAX

```
Get-CsOnlineDirectoryTenantNumberCities [[-Tenant] <Guid>] [-DomainController <Fqdn>] [-Force]
 [<CommonParameters>]
```

## DESCRIPTION
This cmdlet can be used to fetch all the cities for which your organization has already acquired telephone numbers.
It is mainly used to filter cities for which telephone numbers are acquired.

The console output will be in the form:

Get-CsOnlineDirectoryTenantNumberCities

NOAM-US-CA-LA

NOAM-US-IL-CH

NOAM-US-NY-NY

NOAM-US-TX-DA

NOAM-US-MA-BO

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-CsOnlineDirectoryTenantNumberCities
```

This example returns all the cities for which telephone numbers have been acquired by your organization.


## PARAMETERS

### -DomainController
This parameter is reserved for internal Microsoft use.

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases: DC
Applicable: Skype for Business Online

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
Applicable: Skype for Business Online

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
Applicable: Skype for Business Online

Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/?LinkID=113216).


## INPUTS

### None


## OUTPUTS

### IList<string> containing the geocodes of the relevant cities.


## NOTES


## RELATED LINKS


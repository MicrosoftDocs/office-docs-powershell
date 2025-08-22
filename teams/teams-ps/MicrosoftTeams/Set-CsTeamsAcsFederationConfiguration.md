---
author: tomkau
external help file: Microsoft.TeamsCmdlets.PowerShell.Custom.dll-Help.xml
Locale: en-US
Module Name: MicrosoftTeams
ms.author: tomkau
online version: https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsacsfederationconfiguration
schema: 2.0.0
title: Set-CsTeamsAcsFederationConfiguration
---

# Set-CsTeamsAcsFederationConfiguration

## SYNOPSIS

This cmdlet is used to manage the federation configuration between Teams and Azure Communication Services. For more information, please see [Azure Communication Services and Teams Interoperability](https://learn.microsoft.com/azure/communication-services/concepts/teams-interop).

## SYNTAX

```powershell
Set-CsTeamsAcsFederationConfiguration
 [-Identity <String[]>]
 [-EnableAcsUsers <Boolean>]
 [-AllowedAcsResources <String[]>]
 [-RequireAcsFederationForMeeting <Boolean>]
 [-LabelForAllowedAcsUsers <String>]
 [-HideBannerForAllowedAcsUsers <Boolean>]
 [-WhatIf]
 [-Confirm]
 [<CommonParameters>]
```

## DESCRIPTION

Federation between Teams and Azure Communication Services (ACS) allows external users from ACS to connect and communicate with Teams users over voice and video. These custom applications may be used by end users or by bots, and there is no differentiation in how they appear to Teams users unless the developer of the application explicitly indicates this as part of the communication. For more information, see [Teams interoperability](https://learn.microsoft.com/azure/communication-services/concepts/teams-interop).

This cmdlet is used to enable or disable Teams and ACS federation for a Teams tenant, and to specify which ACS resources can connect to Teams. Only listed ACS resources can be allowed.

You must be a Teams service admin or a Teams communication admin for your organization to run the cmdlet.

## EXAMPLES

### Example 1
In this example, federation between Teams and ACS is disabled completely.

```powershell
Set-CsTeamsAcsFederationConfiguration -EnableAcsUsers $False
```

### Example 2
In this example, federation is enabled for just one ACS resource.

```powershell
$allowlist = @('faced04c-2ced-433d-90db-063e424b87b1')
Set-CsTeamsAcsFederationConfiguration -EnableAcsUsers $True -AllowedAcsResources $allowlist
```

## PARAMETERS

### -AllowedAcsResources

The list of the ACS resources (at least one) for which federation is enabled, when EnableAcsUsers is set to true. If EnableAcsUsers is set to false, then this list is ignored and should be null/empty.

The ACS resources are listed using their immutable resource id, which is a guid that can be found on the Azure portal.

```yaml
Type: String[]
Position: Named
Default value: Empty/Null
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnableAcsUsers

Set to True to enable federation between Teams and ACS. When set to False, all other parameters are ignored.

```yaml
Type: Boolean
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -HideBannerForAllowedAcsUsers

This configuration controls the display of the 'limited call features' banner for Azure Communication Services users participating in Teams meetings or calls. Possible values are: True, False. Set to True to hide the banner for allowed ACS users in Teams meetings or calls.

```yaml
Type: Boolean
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
Specifies the collection of tenant federation configuration settings to be modified. Because each tenant is limited to a single, global collection of federation settings there is no need include this parameter when calling the Set-CsTenantFederationConfiguration cmdlet. If you do choose to use the Identity parameter, you must also include the Tenant parameter. For example:

`Set-CsTenantFederationConfiguration -Tenant "bf19b7db-6960-41e5-a139-2aa373474354" -Identity "global"`
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

### -LabelForAllowedAcsUsers

This configuration controls the user label that is displayed for Azure Communication Services users when they join Teams meetings or calls. Possible values are: Unverified, External. When the value is set to Unverified,  the ACS user label is displayed as 'Unverified' when an ACS user joins Teams meetings or calls. When the value is set to External, if an ACS user joins a Teams meeting or call from a resource listed in AllowAllAcsResources, their label should be displayed as 'External'.

```yaml
Type: String
Position: Named
Default value: Unverified
Accept pipeline input: False
Accept wildcard characters: False
```

### -RequireAcsFederationForMeeting

This configuration controls whether ACS Federation is required for meetings. Possibles values are: True, False.

```yaml
Type: Boolean
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

[Get-CsTeamsAcsFederationConfiguration](https://learn.microsoft.com/powershell/module/microsoftteams/get-csteamsacsfederationconfiguration)

[New-CsExternalAccessPolicy](https://learn.microsoft.com/powershell/module/microsoftteams/new-csexternalaccesspolicy)

[Set-CsExternalAccessPolicy](https://learn.microsoft.com/powershell/module/microsoftteams/set-csexternalaccesspolicy)

[Grant-CsExternalAccessPolicy](https://learn.microsoft.com/powershell/module/microsoftteams/grant-csexternalaccesspolicy)

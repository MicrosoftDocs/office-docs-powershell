---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
online version: https://learn.microsoft.com/powershell/module/teams/disable-csonlinesipdomain
applicable: Microsoft Teams
title: Disable-CsOnlineSipDomain
schema: 2.0.0
manager: bulenteg
author: tomkau
ms.author: tomkau
ms.reviewer: rogupta
---

# Disable-CsOnlineSipDomain

## SYNOPSIS

This cmdlet prevents provisioning of users in Skype for Business Online for the specified domain. This cmdlet allows organizations with multiple on-premises deployments of Skype For Business Server or Lync Server to safely synchronize users from multiple forests into a single Office 365 tenant.

## SYNTAX

```powershell
Disable-CsOnlineSipDomain -Domain <String> [-Force] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
Note: Only one Skype for Business forest can be in hybrid mode at a given time. For full details on this scenario, including step-by-step instructions, see [Cloud consolidation for Teams and Skype for Business](https://learn.microsoft.com/skypeforbusiness/hybrid/cloud-consolidation).

This cmdlet enables organizations with *multiple on-premises deployments of Skype for Business Server (or Lync Server)* to safely synchronize users from multiple forests into a single Office 365 tenant. When an online SIP domain is disabled in Skype for Business Online, provisioning is blocked for users in this SIP domain. This ensures routing for any on-premises users in this SIP domain continues to function properly.

This cmdlet facilitates consolidation of multiple Skype for Business Server deployments into a single Office 365 tenant. Consolidation can be achieved by moving one deployment at a time into Office 365, **provided the following key requirements are met**:

- There must be at most 1 O365 tenant involved. Consolidation in scenarios with >1 O365 tenant is not supported.

- At any given time, only 1 on-premises SfB forest can be in hybrid mode (Shared Sip Address Space) with Office 365. All other on-premises SfB forests must remain on-premises. (They presumably are federated with each other.)

- If 1 deployment is in hybrid mode, all sip domains from any other SfB forests must be disabled using this cmdlet before they can be synchronized into the tenant with Microsoft Entra Connect. Users in all SfB forests other than the hybrid forest must remain on-premises.

- Organizations must fully migrate each SfB forest individually into the O365 tenant using hybrid mode (Shared Sip Address Space), and then detach the "hybrid" deployment, *before* moving on to migrate the next on-premises SfB deployment.

This cmdlet may also be useful for organizations with on-premises deployments of Skype for Business Server that have not properly configured Microsoft Entra Connect. If the organization does not sync msRTCSIP-DeploymentLocator for its users, then Skype for Business Online will attempt to provision online any users with an assigned Skype for Business license, despite there being users on-premises. While the correct fix is to update the configuration for Microsoft Entra Connect to sync those attributes, using Disable-CsOnlineSipDomain can also mitigate the problem until that configuration change can be made. If this cmdlet is run, any users that were previously provisioned online in that domain will be de-provisioned in Skype for Business Online.

Important: This cmdlet should not be run for domains that contain users hosted in Skype for Business Online. Any users in a sip domain that are already provisioned *online* will cease to function if you disable the online sip domain:
- Their SIP addresses will be removed.
- All contacts and meetings for these users hosted in Skype for Business Online will be deleted.
- These users will no longer be able to login to the Skype for Business Online environment.
- If these users use Teams, they will no longer be able to inter-operate with Skype for Business users, nor will they be able to federate with any users in other organizations.

Note: If the Tenant is enabled for Regionally Hosted Meetings in Skype for Business Online, Online SIP Domains must be disabled in all regions. You must execute this cmdlet in each region that is added in Allowed Data Location.

## EXAMPLES

### Example 1

```powershell
Disable-CsOnlineSipDomain -Domain Fabrikam.com
```

The cmdlet above disables the online sip domain Fabrikam.com. This would be useful in the case where a company, Contoso.com, that has Skype for Business acquires Fabrikam, which also has an on-premises deployment of Skype for Business Server. If Contoso is in hybrid mode with Skype for Business Online or if the intent is to configure it for hybrid, then if the organization wants to synchronize identities from Fabrikam.com into the same O365 tenant, the organization must first run this cmdlet.

## PARAMETERS

### -Domain

The SIP domain to be disabled for online provisioning in Skype for Business Online.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
applicable: Microsoft Teams
Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm

Prompts you for confirmation before running the cmdlet.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force

Suppresses all confirmation prompts that might occur when running the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
applicable: Microsoft Teams
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters

This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### None

## OUTPUTS

### None

## NOTES

This cmdlet is for advanced scenarios only. Organizations that are pure online or have only 1 on-premises deployment need not run this cmdlet.

## RELATED LINKS

[Enable-CsOnlineSipDomain](https://learn.microsoft.com/powershell/module/teams/enable-csonlinesipdomain)

[Get-CsOnlineSipDomain](https://learn.microsoft.com/powershell/module/teams/get-csonlinesipdomain)

[Cloud consolidation for Teams and Skype for Business](https://learn.microsoft.com/skypeforbusiness/hybrid/cloud-consolidation)

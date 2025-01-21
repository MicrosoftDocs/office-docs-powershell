---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
online version: https://learn.microsoft.com/powershell/module/teams/enable-csonlinesipdomain
applicable: Microsoft Teams
title: Enable-CsOnlineSipDomain
schema: 2.0.0
manager: bulenteg
author: tomkau
ms.author: tomkau
ms.reviewer: rogupta
---

# Enable-CsOnlineSipDomain

## SYNOPSIS

This cmdlet enables provisioning of users in Skype for Business Online for the specified domain. This cmdlet is only necessary to run if you previously disabled a domain using Disable-CsOnlineSipDomain. Enable-CsOnlineSipDomain is used to facilitate consolidation of separate Skype for Business deployments into a single Office 365 tenant.

## SYNTAX

```powershell
Enable-CsOnlineSipDomain -Domain <String> [-Force] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION

This cmdlet enables online provisioning of users in the specified SIP domain. In conjunction with Disable-CsOnlineSipDomain, this cmdlet allows organizations to consolidate *multiple on-premises deployments of Skype for Business Server (or Lync Server)* into a single Office 365 tenant. Consolidation can be achieved by moving one deployment at a time into Office 365, provided the following key requirements are met:

- There must be at most 1 O365 tenant involved. Consolidation for scenarios with > 1 O365 tenant is not supported.

- At any given time, only 1 on-premises SfB forest can be in hybrid mode (Shared Sip Address Space) with Office 365. All other on-premises SfB forests must remain on-premises. (They presumably are federated with each other.)

- If 1 deployment is in hybrid mode, all online SIP domains from any other SfB forests must be disabled before they can be synchronized into the tenant with Microsoft Entra Connect. Users in all SfB forests other than the hybrid forest must remain on-premises.

- Organizations must fully migrate (e.g move all users to the cloud) each SfB forest individually into the O365 tenant using hybrid mode (Shared Sip Address Space), and then detach the "hybrid" deployment, *before* moving on to migrate the next on-premises SfB deployment.

Before running this cmdlet for any SIP domain in a Skype for Business Server deployment, you must complete migration of any other existing hybrid SfB deployment that is in progress. All users in an existing hybrid deployment must be moved to the cloud, and that existing hybrid deployment must be detached from Office 365, as described in this article: [Disable hybrid to complete migration to the cloud](https://learn.microsoft.com/skypeforbusiness/hybrid/cloud-consolidation-disabling-hybrid).

Important: If you have more than one on-premises deployment of Skype for Business Server, you *must* ensure SharedSipAddressSpace is disabled in all other Skype for Business Server deployments except the deployment containing the SIP domain that is being enabled.

Note: If the Tenant is enabled for Regionally Hosted Meetings in Skype for Business Online, Online SIP Domains must be Enabled in all regions. You must execute this cmdlet in each region that is added in Allowed Data Location for Skype for Business.

## EXAMPLES

### Example 1

```powershell
Enable-CsOnlineSipDomain -Domain contoso.com
```

Enables the domain contoso.com for online provisioning in Skype for Business Online.

## PARAMETERS

### -Domain

The SIP domain to be enabled for online provisioning in Skype for Business Online.

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
applicable: Microsoft Teams
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

This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable,
-OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### None

## OUTPUTS

### None

## NOTES

## RELATED LINKS

[Disable-CsOnlineSipDomain](https://learn.microsoft.com/powershell/module/teams/disable-csonlinesipdomain)

[Get-CsOnlineSipDomain](https://learn.microsoft.com/powershell/module/teams/get-csonlinesipdomain)

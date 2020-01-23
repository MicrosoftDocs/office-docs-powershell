---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
online version: https://docs.microsoft.com/powershell/module/skype/get-csonlinesipdomain
applicable: Skype for Business Online
title: Get-CsOnlineSipDomain
schema: 2.0.0
manager: bulenteg
author: tomkau
ms.author: tomkau
ms.reviewer: rogupta
---

# Get-CsOnlineSipDomain

## SYNOPSIS
This cmdlet lists online sip domains and their enabled/disabled status. In a disabled domain, provisioning of users is blocked. Once a domain is re-enabled, provisioning of users in that domain will happen.  

## SYNTAX

```
Get-CsOnlineSipDomain [-Domain <String>] [-DomainStatus <DomainStatus>] [<CommonParameters>]
```

## DESCRIPTION
This cmdlet is useful for organizations consolidating multiple on-premises deployments of Skype for Business Server into a single Office 365 tenant. During consolidation, sip domains for all forests hosting Skype for Business Server - other than the forest currently in hybrid mode -  must be disabled. Once a hybrid deployment is fully migrated to the cloud and detached from Office 365, the next forest can start migration to the cloud. This cmdlet allows administrators to view the status of  sip domains in their Office 365 tenant. For full details on cloud consolidation scenarios, see [Cloud consolidation for Teams and Skype for Business](https://docs.microsoft.com/skypeforbusiness/hybrid/cloud-consolidation).

## EXAMPLES

### Example 1
```powershell
PS C:\> Get-CsOnlineSipDomain
```

List all online SIP domains in the tenant and show their enabled/disabled status.

### Example 2
```powershell
PS C:\> Get-CsOnlineSipDomain -DomainStatus Disabled
```

List all disabled online SIP domains in the tenant.

## PARAMETERS

### -Domain
A specific domain to get the status of.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
online version: https://docs.microsoft.com/powershell/module/skype/get-csonlinesipdomain
applicable: Skype for Business Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```


### -DomainStatus
This indicates the status of an online sip domain, which can be either enabled or disabled.

```yaml
Type: DomainStatus
Parameter Sets: (All)
Aliases:
Accepted values: All, Enabled, Disabled
online version: https://docs.microsoft.com/powershell/module/skype/get-csonlinesipdomain
applicable: Skype for Business Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```


### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable.
For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### None

## OUTPUTS

### Microsoft.Rtc.Management.Hosted.Provision.OSD.OnlineSipDomainBase+DomainState
## NOTES

## RELATED LINKS

[Disable-CsOnlineSipDomain](Disable-CsOnlineSipDomain.md)
[Enable-CsOnlineSipDomain](Enable-CsOnlineSipDomain.md) 
[Cloud consolidation for Teams and Skype for Business](https://docs.microsoft.com/skypeforbusiness/hybrid/cloud-consolidation)

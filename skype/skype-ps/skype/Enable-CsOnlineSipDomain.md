---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
applicable: Skype for Business Online
title: Enable-CsOnlineSipDomain
schema: 2.0.0
---

# Enable-CsOnlineSipDomain

## SYNOPSIS
THIS IS PRELIMINARY DOCUMENTATION OF UPCOMING FUNCTIONALITY</br>

This cmdlet enables provisioning of users in Skype for Business Online for the specified domain. This cmdlet is only necessary to run if you previously disabled a domain using Disable-CsOnlineSipDomain. Enable-CsOnlineSipDomain is used to faciliate consolidation of separate Skype for Business deployments into a single Office 365 tenant.

## SYNTAX

```
Enable-CsOnlineSipDomain -Domain <String> [-Tenant <System.Guid>] [-DomainController <String>] [-Force]
 [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
This cmdlet enables online provisioning of users in the specified SIP domain.  In conjunction with Disable-CsOnlineSipDomain, this cmdlet allows organizations to consolidate *multiple on-premises deployments of Skype for Business Server (or Lync Server)* into a single Office 365 tenant. Consolidation can be achieved by moving one deployment at a time into Office 365, provided the following key requirements are met: 
 - There must be at most 1 O365 tenant involved. Consolidation for scenarios with >1 O365 tenant is not supported. 
 - At any given time, only 1 on-premise SfB forest can be in hybrid mode (shared sip address space) with Office 365. All other on-premises SfB forests must remain on-premises. (They presumably are federated with each other.)   
 - If 1 deployment is in hybrid mode, all online SIP domains from any other SfB forests must be disabled before they can be synchronized into the tenant with Azure AD Connect. Users in all SfB forests other than the hybrid forest must remain on-premises. 
 - Organizations must fully migrate (e.g move all users to the cloud) each SfB forest individually into the O365 tenant using hybrid mode (Shared Sip Address Space), and then detach the “hybrid” deployment, *before* moving on to migrate the next on-premise SfB deployment.    

Before running this cmdlet for any SIP domain in a Skype for Business Server deployment, you must complete migration of any other existing hybrid SfB deployment that is in progress. All users in an existing hybrid deployment must be moved to the cloud, and that existing hybrid deployment must be detached from Office 365, as described below.

**IMPORTANT**
If you have more than one on-premises deployment of Skype for Business Server, you *must* ensure SharedSipAddressSpace is disabled in all other Skype for Business Server deployments except the deployment containing the SID domain that is being enabled. 

**HOW TO DETACH A HYBRID DEPLOYMENT FROM OFFICE 365**

Once you have moved all users from on-premises into the cloud, you can decommission the on-premises Skype for Business deployment. Aside from removing any hardware, a critical step is to logically detach that on-premises deployment from Office 365. Detaching hybrid consists of 3 steps:
 -	Disable shared sip address space in the O365 tenant.
 - Disable the ability in the on-premises environment to communicate with O365
 - Update DNS records to point to Office 365.
These steps should be done together as a unit. 

- Disable shared sip address space in the Office 365 tenant
\_sipfederationtls.\_tcpThe command below needs to be done from a Skype for Business Online PowerShell window. 

`
PS C:\> Set-CsTenantFederationConfiguration -SharedSipAddressSpace $false
`

- Disable ability in on-premise to communicate with Office 365 
The command below needs to be done from an on-premises PowerShell window.  If you have previously imported an Office 365 session, start a new Skype for Business PowerShell session.

`
Get-CsHostingProvider|Set-CsHostingProvider -Enabled $false
`

- Update DNS to point to O365
The organization’s external DNS for the former on-premises deployment needs to be updated so that Skype for Business records point to Office 365 instead of Onprem. Specifically:


| Record Type   | Name                     | TTL  | Value                             |
|:--------------|:-------------------------|:----:|:----------------------------------|
| SRV           | \_sipfederationtls.\_tcp | 3600 | 100 1 5061 sipfed.online.lync.com |
| SRV           | \_sip.\_tls              | 3600 | 100 1 443 sipdir.online.lync.com  |
| CNAME         | lyncdiscover             | 3600 | webdir.online.lync.com            |
| CNAME         | sip                      | 3600 | sipdir.online.lync.com            |
| CNAME         | meet                     | 3600 | webdir.online.lync.com            |
| CNAME         | dialin                   | 3600 | webdir.online.lync.com            |



## EXAMPLES

### Example 1
```powershell
PS C:\> Enable-CsOnlineSipDomain -Domain contoso.com
```

Enables the domain contoso.com for online provisioning in Skype for Business Online. 

## PARAMETERS

### -Confirm
Prompts you for confirmation before running the cmdlet.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
applicable: Skype for Business Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Domain
The sip domain to be enabled for online provisioning in Skype for Business Online.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
applicable: Skype for Business Online
Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController
{{Fill DomainController Description}}

```yaml
Type: String
Parameter Sets: (All)
Aliases: DC
applicable: Skype for Business Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
{{Fill Force Description}}

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
applicable: Skype for Business Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Tenant
{{Fill Tenant Description}}

```yaml
Type: System.Guid
Parameter Sets: (All)
Aliases:
applicable: Skype for Business Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
Shows what would happen if the cmdlet runs.
The cmdlet is not run.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
applicable: Skype for Business Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable.
For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### None

## OUTPUTS

### System.Object
## NOTES

## RELATED LINKS

[Disable-CsOnlineSipDomain](Disable-CsOnlineSipDomain.md)
[Get-CsOnlineSipDomain](Get-CsOnlineSipDomain.md)

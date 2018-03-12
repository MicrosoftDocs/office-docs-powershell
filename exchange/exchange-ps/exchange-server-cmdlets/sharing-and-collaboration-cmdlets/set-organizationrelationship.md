---
title: "Set-OrganizationRelationship"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/16/2018
ms.audience: ITPro
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: 4e3b9d1d-cf41-4fd0-97e3-a0bbc816cf87
description: "This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other."
---

# Set-OrganizationRelationship

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other. 
  
Use the **Set-OrganizationRelationship** cmdlet to modify existing organization relationships. Organization relationships define the settings that are used with external Exchange organizations to access calendar free/busy information or to move mailboxes between on-premises Exchange servers and Exchange Online as part of hybrid deployments.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Set-OrganizationRelationship -Identity <OrganizationRelationshipIdParameter> [-ArchiveAccessEnabled <$true | $false>] [-Confirm [<SwitchParameter>]] [-DeliveryReportEnabled <$true | $false>] [-DomainController <Fqdn>] [-DomainNames <MultiValuedProperty>] [-Enabled <$true | $false>] [-Force <SwitchParameter>] [-FreeBusyAccessEnabled <$true | $false>] [-FreeBusyAccessLevel <None | AvailabilityOnly | LimitedDetails>] [-FreeBusyAccessScope <GroupIdParameter>] [-MailboxMoveDirection <None | Inbound | Outbound>] [-MailboxMoveEnabled <$true | $false>] [-MailTipsAccessEnabled <$true | $false>] [-MailTipsAccessLevel <None | Limited | All>] [-MailTipsAccessScope <GroupIdParameter>] [-Name <String>] [-OrganizationContact <SmtpAddress>] [-PhotosEnabled <$true | $false>] [-TargetApplicationUri <Uri>] [-TargetAutodiscoverEpr <Uri>] [-TargetOwaURL <Uri>] [-TargetSharingEpr <Uri>] [-WhatIf [<SwitchParameter>]]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example modifies the free/busy access level to  `LimitedDetails`, which includes time, subject, and location.
  
```
Set-OrganizationRelationship -Identity "Fourth Coffee" -FreeBusyAccessLevel LimitedDetails
```

### Example 2

This example disables the organization relationship with Contoso
  
```
Set-OrganizationRelationship -Identity "Contoso" -Enabled $false
```

## Detailed Description
<a name="DetailedDescription"> </a>

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Identity_ <br/> |Required  <br/> |Microsoft.Exchange.Configuration.Tasks.OrganizationRelationshipIdParameter  <br/> | The _Identity_ parameter specifies the organization relationship that you want to modify. You can use any value that uniquely identifies the organization relationship. For example: <br/>  Name <br/>  Canonical name <br/>  GUID <br/> |
| _ArchiveAccessEnabled_ <br/> |Optional  <br/> |System.Boolean  <br/> | The _ArchiveAccessEnabled_ parameter specifies whether the organization relationship has been configured to provide remote archive access. Valid values are: <br/>  `$true`: The external organization provides remote access to mailbox archives.  <br/>  `$false`: The external organization doesn't provide remote access to mailbox archives. This is the default value  <br/> |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _DeliveryReportEnabled_ <br/> |Optional  <br/> |System.Boolean  <br/> | The _DeliveryReportEnabled_ parameter specifies whether Delivery Reports should be shared over the organization relationship. Valid values are: <br/>  `$true`: Delivery Reports should be shared over the organization relationship. This value means the organization has agreed to share all Delivery Reports with the external organization, and the organization relationship should be used to retrieve Delivery Report information from the external organization.  <br/>  `$false`: Delivery Reports shouldn't be shared over the organization relationship. This is the default value  <br/>  For message tracking to work in a cross-premises Exchange scenario, this parameter must be set to `$true` on both sides of the organization relationship. If the value of this parameter is set to `$false` on one or both sides of the organization relationship, message tracking between the organizations won't work in either direction. <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |This parameter is available only in on-premises Exchange.  <br/> The _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> |
| _DomainNames_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.MultiValuedProperty  <br/> |The _DomainNames_ parameter specifies the SMTP domains of the external organization. You can specify multiple domains separated by commas (for example, "contoso.com","northamerica.contoso.com"). <br/> |
| _Enabled_ <br/> |Optional  <br/> |System.Boolean  <br/> | The _Enabled_ parameter specifies whether to enable the organization relationship. Valid values are: <br/>  `$true`: The organization relationship is enabled. This is the default value.  <br/>  `$false`: The organization relationship is disabled. This value completely stops sharing for the organization relationship.  <br/> |
| _Force_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _Force_ switch specifies whether to suppress warning or confirmation messages. You can use this switch to run tasks programmatically where prompting for administrative input is inappropriate. You don't need to specify a value with this switch. <br/> |
| _FreeBusyAccessEnabled_ <br/> |Optional  <br/> |System.Boolean  <br/> | The _FreeBusyAccessEnabled_ parameter specifies whether the organization relationship should be used to retrieve free/busy information from the external organization. Valid values are: <br/>  `$true`: Free/busy information is retrieved from the external organization.  <br/>  `$false`: Free/busy information isn't retrieved from the external organization. This is the default value.  <br/>  You control the free/busy access level and scope by using the _FreeBusyAccessLevel_ and _FreeBusyAccessScope_ parameters. <br/> |
| _FreeBusyAccessLevel_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Directory.SystemConfiguration.FreeBusyAccessLevel  <br/> | The _FreeBusyAccessLevel_ parameter specifies the maximum amount of detail returned to the requesting organization. Valid values are: <br/>  `None`: No free/busy access.  <br/>  `AvailabilityOnly`: Free/busy access with time only.  <br/>  `LimitedDetails`: Free/busy access with time, subject, and location.  <br/>  This parameter is only meaningful when the _FreeBusyAccessEnabled_ parameter value is `$true`.  <br/> |
| _FreeBusyAccessScope_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.GroupIdParameter  <br/> | The _FreeBusyAccessScope_ parameter specifies a mail-enabled security group in the internal organization that contains users whose free/busy information is accessible by an external organization. You can use any value that uniquely identifies the group. <br/>  For example: <br/>  Name <br/>  Display name <br/>  Distinguished name (DN) <br/>  Canonical DN <br/>  GUID <br/>  This parameter is only meaningful when the _FreeBusyAccessEnabled_ parameter value is `$true`.  <br/> |
| _MailboxMoveDirection_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Directory.SystemConfiguration.MailboxMoveDirection  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _MailboxMoveEnabled_ <br/> |Optional  <br/> |System.Boolean  <br/> | The _MailboxMoveEnabled_ parameter specifies whether the organization relationship enables moving mailboxes to or from the external organization. Valid values are: <br/>  `$true`: Mailbox moves to or from the external organization are allowed.  <br/>  `$false`: Mailbox moves to from the external organization aren't allowed. This is the default value.  <br/> |
| _MailTipsAccessEnabled_ <br/> |Optional  <br/> |System.Boolean  <br/> | The _MailTipsAccessEnabled_ parameter specifies whether MailTips for users in this organization are returned over this organization relationship. Valid values are: <br/>  `$true`: MailTips for users in this organization are returned over the organization relationship.  <br/>  `$false`: MailTips for users in this organization aren't returned over the organization relationship. This is the default value.  <br/>  You control the MailTips access level by using the _MailTipsAccessLevel_ parameter. <br/> |
| _MailTipsAccessLevel_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Directory.SystemConfiguration.MailTipsAccessLevel  <br/> | The _MailTipsAccessLevel_ parameter specifies the level of MailTips data externally shared over this organization relationship. This parameter can have the following values: <br/>  `All`: All MailTips are returned, but the recipients in the remote organization are considered external. For the Auto Reply MailTip, the external Auto Reply message is returned.  <br/>  `Limited`: Only those MailTips that could prevent a non-delivery report (NDR) or an Auto Reply are returned. Custom MailTips, the Large Audience MailTip, and Moderated Recipient MailTips won't be returned.  <br/>  `None`: No MailTips are returned to the remote organization. This is the default value.  <br/>  This parameter is only meaningful when the _MailTipsAccessEnabled_ parameter value is `$true`.  <br/> |
| _MailTipsAccessScope_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.GroupIdParameter  <br/> | The _MailTipsAccessScope_ parameter specifies a mail-enabled security group in the internal organization that contains users whose free/busy information is accessible by an external organization. You can use any value that uniquely identifies the group. <br/>  For example: <br/>  Name <br/>  Display name <br/>  Distinguished name (DN) <br/>  Canonical DN <br/>  GUID <br/>  The default value is blank ( `$null`), which means no group is specified.  <br/>  If you use this parameter, recipient-specific MailTips are returned only for those recipients that are members of the specified group. The recipient-specific MailTips are: <br/>  Auto Reply <br/>  Mailbox Full <br/>  Custom <br/>  If you don't use this parameter, recipient-specific MailTips are returned for all recipients in the organization. <br/>  This restriction only applies to mailboxes, mail users, and mail contacts. It doesn't apply to distribution groups. <br/> |
| _Name_ <br/> |Optional  <br/> |System.String  <br/> |The _Name_ parameter specifies the unique name of the organization relationship. The maximum length is 64 characters. <br/> |
| _OrganizationContact_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.SmtpAddress  <br/> |The _OrganizationContact_ parameter specifies the email address that can be used to contact the external organization (for example, administrator@fourthcoffee.com). <br/> |
| _PhotosEnabled_ <br/> |Optional  <br/> |System.Boolean  <br/> | The _PhotosEnabled_ parameter specifies whether photos for users in the internal organization are returned over the organization relationship. Valid values are: <br/>  `$true`: Photos for users in this organization are returned over the organization relationship.  <br/>  `$false`: Photos for users in this organization aren't returned over the organization relationship. This is the default value.  <br/> |
| _TargetApplicationUri_ <br/> |Optional  <br/> |System.Uri  <br/> |The _TargetApplicationUri_ parameter specifies the target Uniform Resource Identifier (URI) of the external organization. The _TargetApplicationUri_ parameter is specified by Exchange when requesting a delegated token to retrieve free and busy information, for example, mail.contoso.com. <br/> |
| _TargetAutodiscoverEpr_ <br/> |Optional  <br/> |System.Uri  <br/> |The _TargetAutodiscoverEpr_ parameter specifies the Autodiscover URL of Exchange Web Services for the external organization, for example, https://contoso.com/autodiscover/autodiscover.svc/wssecurity. Exchange uses Autodiscover to automatically detect the correct Exchangeserver endpoint to use for external requests. <br/> |
| _TargetOwaURL_ <br/> |Optional  <br/> |System.Uri  <br/> |The _TargetOwaURL_ parameter specifies the Outlook on the web (formerly Outlook Web App) URL of the external organization that's defined in the organization relationship. It is used for Outlook on the web redirection in a cross-premise Exchange scenario. Configuring this attribute enables users in the organization to use their current Outlook on the web URL to access Outlook on the web in the external organization. <br/> |
| _TargetSharingEpr_ <br/> |Optional  <br/> |System.Uri  <br/> |The _TargetSharingEpr_ parameter specifies the URL of the target Exchange Web Services for the external organization. <br/>  If you use this parameter, this URL is always used to reach the external Exchange server. TheURL that's specified by the _TargetAutoDiscoverEpr_ parameter isn't used to locate the external Exchange server. <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  


---
title: "Set-CASMailboxPlan"
ms.author: chrisda
author: chrisda
ms.date: 1/12/2018
ms.audience: Developer
ms.topic: reference
ms.service: exchange-online
localization_priority: Normal
ms.assetid: 1f9070cd-cae6-4e16-93d7-301abac8cab5
description: "This cmdlet is available only in the cloud-based service."
---

# Set-CASMailboxPlan

This cmdlet is available only in the cloud-based service. 
  
Use the **Get-CASMailboxPlan** cmdlet to modify Client Access services (CAS) mailbox plans in the cloud-based organization.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Set-CASMailboxPlan -Identity <MailboxPlanIdParameter> [-ActiveSyncDebugLogging <$true | $false>] [-ActiveSyncEnabled <$true | $false>] [-ActiveSyncMailboxPolicy <MailboxPolicyIdParameter>] [-Confirm [<SwitchParameter>]] [-DisplayName <String>] [-DomainController <Fqdn>] [-ECPEnabled <$true | $false>] [-EwsAllowEntourage <$true | $false>] [-EwsAllowList <MultiValuedProperty>] [-EwsAllowMacOutlook <$true | $false>] [-EwsAllowOutlook <$true | $false>] [-EwsApplicationAccessPolicy <EnforceAllowList | EnforceBlockList>] [-EwsBlockList <MultiValuedProperty>] [-EwsEnabled <$true | $false>] [-IgnoreDefaultScope <SwitchParameter>] [-ImapEnabled <$true | $false>] [-ImapEnableExactRFC822Size <$true | $false>] [-ImapForceICalForCalendarRetrievalOption <$true | $false>] [-ImapMessagesRetrievalMimeFormat <TextOnly | HtmlOnly | HtmlAndTextAlternative | TextEnrichedOnly | TextEnrichedAndTextAlternative | BestBodyFormat | Tnef>] [-ImapProtocolLoggingEnabled <$true | $false>] [-ImapSuppressReadReceipt <$true | $false>] [-ImapUseProtocolDefaults <$true | $false>] [-MAPIBlockOutlookNonCachedMode <$true | $false>] [-MAPIBlockOutlookRpcHttp <$true | $false>] [-MAPIBlockOutlookVersions <String>] [-MAPIEnabled <$true | $false>] [-OWAEnabled <$true | $false>] [-OWAforDevicesEnabled <$true | $false>] [-OwaMailboxPolicy <MailboxPolicyIdParameter>] [-PopEnabled <$true | $false>] [-PopEnableExactRFC822Size <$true | $false>] [-PopForceICalForCalendarRetrievalOption <$true | $false>] [-PopMessagesRetrievalMimeFormat <TextOnly | HtmlOnly | HtmlAndTextAlternative | TextEnrichedOnly | TextEnrichedAndTextAlternative | BestBodyFormat | Tnef>] [-PopProtocolLoggingEnabled <$true | $false>] [-PopSuppressReadReceipt <$true | $false>] [-PopUseProtocolDefaults <$true | $false>] [-RemotePowerShellEnabled <$true | $false>] [-WhatIf [<SwitchParameter>]]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example disables Exchange ActiveSync and POP3 access to mailboxes in the CAS mailbox plan named  `ExchangeOnlineEnterprise`.
  
```
Set-CASMailboxPlan -Identity ExchangeOnlineEnterprise -ActiveSyncEnabled $false -PopEnabled $false
```

## Detailed Description
<a name="DetailedDescription"> </a>

CAS mailbox plans control client access settings for all mailboxes that have the plans assigned to them (for example, Exchange ActiveSync, POP, IMAP, and Outlook on the web settings).
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx). 
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Identity_ <br/> |Required  <br/> |Microsoft.Exchange.Configuration.Tasks.MailboxPlanIdParameter  <br/> | The _Identity_ parameter specifies the CAS mailbox plan that you want to modify. You can use any value that uniquely identifies the CAS mailbox plan. For example: <br/>  Name <br/>  Display Name <br/>  Distinguished name (DN) <br/>  GUID <br/>  Typically, the name of the CAS mailbox plan is the same as the corresponding mailbox plan (for example, `ExchangeOnlineEnterprise`).  <br/> |
| _ActiveSyncDebugLogging_ <br/> |Optional  <br/> |System.Boolean  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _ActiveSyncEnabled_ <br/> |Optional  <br/> |System.Boolean  <br/> | The _ActiveSyncEnabled_parameter specifies whether to enable or disable Exchange ActiveSync access to mailboxes that have the CAS mailbox plan applied to them. Valid values are:  <br/>  `$true`: ActiveSync access to mailboxes is enabled.  <br/>  `$false`: ActiveSync access to mailboxes is disabled.  <br/> |
| _ActiveSyncMailboxPolicy_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.MailboxPolicyIdParameter  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _DisplayName_ <br/> |Optional  <br/> |System.String  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _ECPEnabled_ <br/> |Optional  <br/> |System.Boolean  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _EwsAllowEntourage_ <br/> |Optional  <br/> |System.Boolean  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _EwsAllowList_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.MultiValuedProperty  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _EwsAllowMacOutlook_ <br/> |Optional  <br/> |System.Boolean  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _EwsAllowOutlook_ <br/> |Optional  <br/> |System.Boolean  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _EwsApplicationAccessPolicy_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Directory.EwsApplicationAccessPolicy  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _EwsBlockList_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.MultiValuedProperty  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _EwsEnabled_ <br/> |Optional  <br/> |System.Boolean  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _IgnoreDefaultScope_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _ImapEnabled_ <br/> |Optional  <br/> |System.Boolean  <br/> | The _ImapEnabled_parameter specifies whether to enable or disable IMAP4 access to mailboxes that have the CAS mailbox plan applied to them. Valid values are:  <br/>  `$true`: IMAP4 access to mailboxes is enabled.  <br/>  `$false`: IMAP4 access to mailboxes is disabled.  <br/> |
| _ImapEnableExactRFC822Size_ <br/> |Optional  <br/> |System.Boolean  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _ImapForceICalForCalendarRetrievalOption_ <br/> |Optional  <br/> |System.Boolean  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _ImapMessagesRetrievalMimeFormat_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Directory.SystemConfiguration.MimeTextFormat  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _ImapProtocolLoggingEnabled_ <br/> |Optional  <br/> |System.Boolean  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _ImapSuppressReadReceipt_ <br/> |Optional  <br/> |System.Boolean  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _ImapUseProtocolDefaults_ <br/> |Optional  <br/> |System.Boolean  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _MAPIBlockOutlookNonCachedMode_ <br/> |Optional  <br/> |System.Boolean  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _MAPIBlockOutlookRpcHttp_ <br/> |Optional  <br/> |System.Boolean  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _MAPIBlockOutlookVersions_ <br/> |Optional  <br/> |System.String  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _MAPIEnabled_ <br/> |Optional  <br/> |System.Boolean  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _OWAEnabled_ <br/> |Optional  <br/> |System.Boolean  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _OWAforDevicesEnabled_ <br/> |Optional  <br/> |System.Boolean  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _OwaMailboxPolicy_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.MailboxPolicyIdParameter  <br/> | The _OwaMailboxPolicy_parameter specifies the Outlook on the web (formerly known as Outlook Web App) mailbox policy that you want applied to mailboxes that have the CAS mailbox plan applied to them. You can use any value that uniquely identifies the Outlook on the web mailbox policy. For example:  <br/>  Name <br/>  Distinguished name (DN) <br/>  GUID <br/>  You can use the **Get-OwaMailboxPolicy** cmdlet to view the avaliable Outlook on the web mailbox policies. <br/> |
| _PopEnabled_ <br/> |Optional  <br/> |System.Boolean  <br/> | The _PopEnabled_parameter specifies whether to enable or disable POP3 access to mailboxes that have the mailbox plan applied to them. Valid values are:  <br/>  `$true`: POP3 access to mailboxes is enabled.  <br/>  `$false`: POP3 access to mailboxes is disabled.  <br/> |
| _PopEnableExactRFC822Size_ <br/> |Optional  <br/> |System.Boolean  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _PopForceICalForCalendarRetrievalOption_ <br/> |Optional  <br/> |System.Boolean  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _PopMessagesRetrievalMimeFormat_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Directory.SystemConfiguration.MimeTextFormat  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _PopProtocolLoggingEnabled_ <br/> |Optional  <br/> |System.Boolean  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _PopSuppressReadReceipt_ <br/> |Optional  <br/> |System.Boolean  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _PopUseProtocolDefaults_ <br/> |Optional  <br/> |System.Boolean  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _RemotePowerShellEnabled_ <br/> |Optional  <br/> |System.Boolean  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The  _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  


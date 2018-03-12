---
title: "Set-RemoteDomain"
ms.author: chrisda
author: chrisda
manager: serdars
ms.date: 2/10/2018
ms.audience: Developer
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: 4738bf25-39b8-4433-bd64-1d60252c2832
description: "This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other."
---

# Set-RemoteDomain

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other. 
  
Use the **Set-RemoteDomain** cmdlet to configure a managed connection for a remote domain.
  
```
Set-RemoteDomain -Identity <RemoteDomainIdParameter> [-AllowedOOFType <External | InternalLegacy | ExternalLegacy | None>] [-AutoForwardEnabled <$true | $false>] [-AutoReplyEnabled <$true | $false>] [-ByteEncoderTypeFor7BitCharsets <Use7Bit | UseQP | UseBase64 | UseQPHtmlDetectTextPlain | UseBase64HtmlDetectTextPlain | UseQPHtml7BitTextPlain | UseBase64Html7BitTextPlain | Undefined>] [-CharacterSet <String>] [-Confirm [<SwitchParameter>]] [-ContentType <MimeHtmlText | MimeText | MimeHtml>] [-DeliveryReportEnabled <$true | $false>] [-DisplaySenderName <$true | $false>] [-DomainController <Fqdn>] [-IsInternal <$true | $false>] [-LineWrapSize <Unlimited>] [-MeetingForwardNotificationEnabled <$true | $false>] [-MessageCountThreshold <Int32>] [-Name <String>] [-NDRDiagnosticInfoEnabled <$true | $false>] [-NDREnabled <$true | $false>] [-NonMimeCharacterSet <String>] [-PreferredInternetCodePageForShiftJis <Undefined | Iso2022Jp | Esc2022Jp | Sio2022Jp>] [-RequiredCharsetCoverage <Int32>] [-TargetDeliveryDomain <$true | $false>] [-TNEFEnabled <$true | $false>] [-TrustedMailInboundEnabled <$true | $false>] [-TrustedMailOutboundEnabled <$true | $false>] [-UseSimpleDisplayName <$true | $false>] [-WhatIf [<SwitchParameter>]]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example performs the following actions:
  
- It disables out-of-office notifications to the remote domain.
    
- It suppresses delivery receipts sent from clients in your organization to the remote domain.
    
- It enables TNEF message data on messages sent to the remote domain.
    
```
Set-RemoteDomain Contoso -AllowedOOFType None -DeliveryReportEnabled $false -TNEFEnabled $true
```

### Example 2

This example queries Active Directory for all remote domains for which auto replies are disabled. Using the pipelining feature, it also disables auto forwards and NDRs to those domains.
  
```
Get-RemoteDomain | Where {$_.AutoReplyEnabled -eq $false} | Set-RemoteDomain -AutoForwardEnabled $false -NDREnabled $false
```

## Detailed Description
<a name="DetailedDescription"> </a>

When you set a remote domain, you can control mail flow with more precision, specify message formatting and policy, and specify acceptable character sets for messages sent to or received from the remote domain.
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Identity_ <br/> |Required  <br/> |Microsoft.Exchange.Configuration.Tasks.RemoteDomainIdParameter  <br/> |The _Identity_ parameter specifies the display name of the remote domain. <br/> The length of the name can't exceed 64 characters.  <br/> |
| _AllowedOOFType_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Directory.SystemConfiguration.AllowedOOFType  <br/> |The _AllowedOOFType_ parameter specifies the type of out-of-office notification returned to users at the remote domain. Valid values are `External`,  `ExternalLegacy`,  `None`, and  `InternalLegacy`. The default value is  `External`.  <br/> |
| _AutoForwardEnabled_ <br/> |Optional  <br/> |System.Boolean  <br/> | The _AutoForwardEnabled_ parameter specifies whether to allow messages that are auto-forwarded by client email programs in your organization. Valid values are: <br/>  `$true`: Auto-forwarded messages are delivered to the remote domain. This is the default value for new remote domains that you create, and the built-in remote domain named Default in Exchange Online.  <br/>  `$false`: Auto-forwarded messages aren't delivered to the remote domain. This is the default value for the built-in remote domain named Default in on-premises Exchange.  <br/> |
| _AutoReplyEnabled_ <br/> |Optional  <br/> |System.Boolean  <br/> | The _AutoReplyEnabled_ parameter specifies whether to allow messages that are automatic replies from client email programs in your organization. Valid values are: <br/>  `$true`: Automatic replies are delivered to the remote domain. This is the default value for new remote domains that you create, and the built-in remote domain named Default in Exchange Online.  <br/>  `$false`: Automatic replies aren't delivered to the remote domain. This is the default value for the built-in remote domain named Default in on-premises Exchange.  <br/> |
| _ByteEncoderTypeFor7BitCharsets_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Directory.SystemConfiguration.ByteEncoderTypeFor7BitCharsetsEnum  <br/> | The _ByteEncoderTypeFor7BitCharsets_ parameter specifies the 7-bit transfer encoding method for MIME format for messages sent to this remote domain. The valid values for this parameter are: <br/>  `Use7Bit`: Always use default 7-bit transfer encoding for HTML and plain text.  <br/>  `UseQP`: Always use QP (quoted-printable) encoding for HTML and for plain text.  <br/>  `UseBase64`: Always use Base64 encoding for HTML and for plain text.  <br/>  `UseQPHtmlDetectTextPlain`: Use QP encoding for HTML and for plain text unless line wrapping is enabled in plain text. If line wrapping is enabled, use 7-bit encoding for plain text.  <br/>  `UseBase64HtmlDetectTextPlain`: Use Base64 encoding for HTML and for plain text, unless line wrapping is enabled in plain text. If line wrapping is enabled in plain text, use Base64 encoding for HTML, and use 7-bit encoding for plain text.  <br/>  `UseQPHtml7BitTextPlain`: Always use QP encoding for HTML. Always use 7-bit encoding for plain text.  <br/>  `UseBase64Html7BitTextPlain`: Always use Base64 encoding for HTML. Always use 7-bit encoding for plain text.  <br/>  `Undefined`: Always use QP encoding for HTML and plain text.  <br/>  The default value is `Undefined`.  <br/> |
| _CharacterSet_ <br/> |Optional  <br/> |System.String  <br/> |The _CharacterSet_ parameter specifies a character set for this remote domain. The character set that you specify is only used for MIME messages that don't have their own character set specified. Setting this parameter doesn't overwrite character sets already specified in the outbound mail. To remove the character set value, set the value to `$null`.  <br/> |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _ContentType_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Directory.SystemConfiguration.ContentType  <br/> | The _ContentType_ parameter specifies the outbound message content type and formatting. Valid values for this parameter are `MimeHtmlText`,  `MimeText`, or  `MimeHtml`:  <br/>  `MimeHtmlText` converts messages to MIME messages that use HTML formatting, unless the original message is a text message. If the original message is a text message, the outbound message is a MIME message that uses text formatting. <br/>  `MimeText` converts all messages to MIME messages that use text formatting. <br/>  `MimeHtml` converts all messages to MIME messages that use HTML formatting. <br/>  The default value is `MimeHtmlText`.  <br/> |
| _DeliveryReportEnabled_ <br/> |Optional  <br/> |System.Boolean  <br/> |The _DeliveryReportEnabled_ parameter specifies whether to allow delivery reports from client software in your organization to the remote domain. The default value is `$true`.  <br/> |
| _DisplaySenderName_ <br/> |Optional  <br/> |System.Boolean  <br/> |The _DisplaySenderName_ parameter specifies whether to display the sender name. Valid values for this parameter are `$true` or `$false`. The default value is  `$true`. This parameter is used for older versions of Exchange and should only be set under the direction of Microsoft Customer Service and Support.  <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |This parameter is available only in on-premises Exchange.  <br/> The _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> The _DomainController_ parameter isn't supported on Edge Transport servers. An Edge Transport server uses the local instance of Active Directory Lightweight Directory Services (AD LDS) to read and write data. <br/> |
| _IsInternal_ <br/> |Optional  <br/> |System.Boolean  <br/> |The _IsInternal_ parameter specifies whether the recipients in this remote domain should be considered internal recipients. Set this parameter to `$true` if this remote domain is part of your cross-premises deployment. <br/> When you set this parameter to  `$true`, all transport components, like transport rules or any agents you may have deployed, treat this remote domain as an internal domain.  <br/> The default value is  `$false`.  <br/> |
| _LineWrapSize_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Unlimited  <br/> |The _LineWrapSize_ parameter specifies the line-wrap size for outbound messages. The parameter takes an integer from 0 through 132, or you can overload the parameter by setting the value to `unlimited`. The default value is  `unlimited`.  <br/> |
| _MeetingForwardNotificationEnabled_ <br/> |Optional  <br/> |System.Boolean  <br/> |The _MeetingForwardNotificationEnabled_ parameter specifies whether to enable meeting forward notifications. When this parameter is enabled, meeting requests forwarded to recipients in the remote domain generate a meeting forward notification to the meeting organizer. When this parameter is disabled, meeting requests forwarded to recipients in the remote domain won't generate a meeting forward notification to the meeting organizer. <br/> Valid values for this parameter are  `$true` or `$false`. The default value is  `$true`.  <br/> |
| _MessageCountThreshold_ <br/> |Optional  <br/> |System.Int32  <br/> |This parameter is available only in on-premises Exchange.  <br/> The _MessageCountThreshold_ parameter specifies the acceptable message count for the remote domain. If the message count exceeds this value, an event is generated that's visible using the **Get-ServerHealth** and **Get-HealthReport** cmdlets. <br/> Valid input for this parameter is an integer. The default value is **Int32** (2147483647). The default value indicates there is no message count threshold defined, and that the message count to the remote domain is unmonitored. <br/> |
| _Name_ <br/> |Optional  <br/> |System.String  <br/> |The _Name_ parameter specifies a unique name for the remote domain object. <br/> |
| _NDRDiagnosticInfoEnabled_ <br/> |Optional  <br/> |System.Boolean  <br/> |This parameter is available only in on-premises Exchange.  <br/> The _NDRDiagnosticInfoEnabled_ parameter specifies whether the diagnostic information is included in NDRs sent to the remote domain. <br/> The diagnostic information of an NDR includes details that help administrators troubleshoot delivery problems. This detailed information includes internal server names. You may not want to expose this information to NDRs sent to external users. If you set this parameter to  `$false`, the diagnostic information section in the NDR body as well as internal server headers from the attached original message headers are removed from the NDR.  <br/> The default value is  `$true`.  <br/> |
| _NDREnabled_ <br/> |Optional  <br/> |System.Boolean  <br/> |This parameter is available only in on-premises Exchange.  <br/> The _NDREnabled_ parameter specifies whether to allow non-delivery reports (NDRs) from your organization. Setting this parameter to `$false` suppresses NDRs to the remote domain. The default value is `$true`.  <br/> |
| _NonMimeCharacterSet_ <br/> |Optional  <br/> |System.String  <br/> |The _NonMimeCharacterSet_ parameter specifies a character set for this remote domain. The character set that you specify is only used for non-MIME (RFC 822 text) messages that don't have their own character set specified. Setting this parameter doesn't overwrite character sets already specified in the outbound mail. To remove the character set value, set the value to ` $null`.  <br/> |
| _PreferredInternetCodePageForShiftJis_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Directory.SystemConfiguration.PreferredInternetCodePageForShiftJisEnum  <br/> | The _PreferredInternetCodePageForShiftJis_ parameter specifies the specific code page to use for Shift JIS character encoding when sending messages to this remote domain. The valid values for this parameter are: <br/>  `50220`: Use ISO-2022-JP codepage.  <br/>  `50221`: Use ESC-2022-JP codepage.  <br/>  `50222`: Use SIO-2022-JP codepage.  <br/> |
| _RequiredCharsetCoverage_ <br/> |Optional  <br/> |System.Int32  <br/> |The _RequiredCharsetCoverage_ parameter specifies a percentage threshold for characters in a message that must match to apply your organization's preferred character set before switching to automatic character set detection. <br/> For example, if you set this parameter to 60, the preferred character sets will still be used during content conversion for messages that contain characters from non-preferred character sets as long as the percentage of those characters is 40 percent or less. If the percentage of characters in a message doesn't belong to preferred character sets, Exchange analyzes the UNICODE characters and automatically determines the best matching character set to use.  <br/> If users in this remote domain use characters that span character sets, you may want to specify a lower percentage to ensure that your organization's preferred character set is used during content conversion.  <br/> |
| _TargetDeliveryDomain_ <br/> |Optional  <br/> |System.Boolean  <br/> |The _TargetDeliveryDomain_ parameter specifies the e-mail domain that's used when generating target addresses for new mail users in a cross-premises deployment scenario. When you have a cross-premises deployment, the user mailboxes on the remote location are represented as mail user objects. For example, all mailboxes hosted on Exchange Online are represented as mail users in your on-premises organization. The value of this parameter is used to determine what domain should be used for the target e-mail address for these mail users. <br/> |
| _TNEFEnabled_ <br/> |Optional  <br/> |System.Boolean  <br/> | The _TNEFEnabled_ parameter specifies whether Transport Neutral Encapsulation Format (TNEF) message encoding is used on messages sent to the remote domain. Valid values for this parameter are `$true`,  `$false`, or  `$null`. The action associated with each value is as follows:  <br/>  `$true`: TNEF encoding is used on all messages sent to the remote domain.  <br/>  `$false`: TNEF encoding isn't used on any messages sent to the remote domain.  <br/>  `$null`: TNEF encoding isn't specified for the remote domain. TNEF encoding for recipients in the remote domain may be specified by the following:  <br/>  Value of the _UseMapiRichTextFormat_ parameter for any mail user or mail contact objects <br/>  Sender's per-recipient settings in Microsoft Outlook <br/>  Sender's default Internet message settings in Outlook <br/>  The default value is `$null`.  <br/> |
| _TrustedMailInboundEnabled_ <br/> |Optional  <br/> |System.Boolean  <br/> |The _TrustedMailInboundEnabled_ parameter specifies whether Exchange will treat e-mail received from this remote domain as trusted messages. If you set this parameter to `$true`, all incoming messages from this remote domain are considered safe and they will bypass content and recipient filtering.  <br/> We recommend that you set this parameter to  `$true` for cross-premises deployment scenarios. <br/> The default value is  `$false`.  <br/> |
| _TrustedMailOutboundEnabled_ <br/> |Optional  <br/> |System.Boolean  <br/> |The _TrustedMailOutboundEnabled_ parameter specifies whether the remote domain is considered a trusted domain. We recommend that you set this parameter to `$true` for cross-premises deployment scenarios. <br/> The default value is  `$false`.  <br/> |
| _UseSimpleDisplayName_ <br/> |Optional  <br/> |System.Boolean  <br/> |The _UseSimpleDisplayName_ parameter specifies whether simple display names for senders appear in messages sent to this domain. Setting this parameter to `$true` enables simple display names for this remote domain. The default value is `$false`.  <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  


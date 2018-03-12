---
title: "New-RemoteMailbox"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/25/2018
ms.audience: ITPro
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: f9e000c3-5f77-494b-8caf-05176aa75c8a

description: "This cmdlet is available only in on-premises Exchange."
---

# New-RemoteMailbox

This cmdlet is available only in on-premises Exchange. 
  
Use the **New-RemoteMailbox** cmdlet to create a mail user in the on-premises Active Directory and also create an associated mailbox in the cloud-based service.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
New-RemoteMailbox -Password <SecureString> -UserPrincipalName <String> <COMMON PARAMETERS>

```

## Examples
<a name="Examples"> </a>

### Example 1

This example creates an on-premises mail user and its associated mailbox in the service. The remote routing address doesn't need to be specified because mail flow between the on-premises organization and the service has been configured. Using this configuration, the **New-RemoteMailbox** cmdlet automatically calculates the SMTP address of the mailbox to be used with the _RemoteRoutingAddress_ parameter. This example also assumes directory synchronization has been configured.
  
The first command stores the password to use with the new remote mailbox in a variable by using the **Get-Credential** cmdlet. The last command creates the mail user.
  
```
$Credentials = Get-Credential; New-RemoteMailbox -Name "Kim Akers" -Password $Credentials.Password -UserPrincipalName kim@corp.contoso.com
```

After the new mail user is created, directory synchronization synchronizes the new mail user to the service and the associated mailbox is created.
  
### Example 2

This example does the following steps:
  
- Creates an on-premises mail user. The mail user is placed in the contoso.com/Archive Users OU. The OU has no effect on the mailbox in the service.
    
- Creates the associated mailbox in the service.
    
- Creates an archive mailbox in the service for the mailbox.
    
As in Example 1, this example assumes that mail flow and directory synchronization have been properly configured.
  
```
$Credentials = Get-Credential; New-RemoteMailbox -Name "Kim Akers" -Password $Credentials.Password -UserPrincipalName kim@corp.contoso.com -OnPremisesOrganizationalUnit "corp.contoso.com/Archive Users" -Archive
```

## Detailed Description
<a name="DetailedDescription"> </a>

The **New-RemoteMailbox** cmdlet creates an on-premises mail user. The mail user contains a specific attribute, which indicates that an associated mailbox in the service should be created when the user is synchronized to the service using directory synchronization.
  
Directory synchronization must be configured correctly for a mailbox to be created in the service. Creation of the mailbox in the service isn't immediate and depends on the directory synchronization schedule.
  
> [!IMPORTANT]
> The policies that you apply to recipients in the on-premises Exchange organization, such as Unified Messaging or compliance policies, aren't applied to mailboxes in the service. You must configure policies in the service if you want policies to be applied to recipients in the service. 
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _AccountDisabled_ <br/> |Required  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _AccountDisabled_ switch specifies whether to create the mail user in a disabled state. You don't have to specify a value with this switch. <br/> |
| _Equipment_ <br/> |Required  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _Equipment_ switch specifies that the mailbox in the service should be created as an equipment resource mailbox. <br/> You can't use the _Equipment_ switch if you specified the _Room_ switch. <br/> |
| _Name_ <br/> |Required  <br/> |System.String  <br/> |The _Name_ parameter specifies the unique name of the on-premises mail user and the associated mailbox in the service. The maximum length is 64 characters. If the value contains spaces, enclose the value in quotation marks ("). <br/> |
| _Password_ <br/> |Required  <br/> |System.Security.SecureString  <br/> |The _Password_ parameter specifies the password used by the mail user to secure his or her account and associated mailbox in the service. <br/> This parameter uses the syntax  `(ConvertTo-SecureString -String '<password>' -AsPlainText -Force)`. Or, to be prompted to enter the password and store it as a variable, run the command  `$password = Read-Host "Enter password" -AsSecureString`, and then use the value  `$password` for this parameter. <br/> |
| _Room_ <br/> |Required  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _Room_ switch specifies that the mailbox in the service should be created as a room resource mailbox. <br/> You can't use the _Room_ switch if you specified the _Equipment_ switch. <br/> |
| _UserPrincipalName_ <br/> |Required  <br/> |System.String  <br/> |The _UserPrincipalName_ parameter specifies the logon name for the user account. The UPN uses an email address format _\<username\>_@ _\<domain\>_. Typically, the _\<domain\>_ value is the domain where the user account resides. <br/> |
| _ACLableSyncedObjectEnabled_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _Alias_ <br/> |Optional  <br/> |System.String  <br/> | The _Alias_ parameter specifies the Exchange alias (also known as themail nickname) for the recipient. This value identifies the recipient as a mail-enabled object, and shouldn't be confused with multiple email addresses for the same recipient (also known as proxy addresses). A recipient can have only one _Alias_ value. <br/>  The value of _Alias_ can contain letters, numbers and the characters !, #, $, %, &amp;, ', *, +, -, /, =, ?, ^, _, `, {, |, } and ~. Periods (.) are allowed, but each period must be surrounded by other valid characters (for example, `help.desk`). Unicode characters from U+00A1 to U+00FF are also allowed. The maximum length of the _Alias_ value is 64 characters. <br/>  When you create a recipient without specifying an email address, the _Alias_ value you specify is used to generate the primary email address ( _\<alias\>_@ _\<domain\>_). Supported Unicode characters are mapped to best-fit US-ASCII text characters. For example, U+00F6 (ö) is changed to oe in the primary email address.  <br/>  If you don't use the _Alias_ parameter when you create a recipient, the value of a different required parameter is used for the **Alias** property value: <br/> **Recipients with user accounts (for example, user mailboxes, and mail users)**: The left side of the _MicrosoftOnlineServicesID_ or _UserPrincipalName_ parameter is used. For example, `helpdesk@contoso.com` results in the **Alias** property value `helpdesk`.  <br/> **Recipeints without user accounts (for example, room mailboxes, mail contacts, and distribution groups)**: The value of the _Name_ parameter is used. Spaces are removed and unsupported characters are converted to question marks (?). <br/>  If you modify the _Alias_ value of an existing recipient, the primary email address is automatically updated only in on-premises environments where the recipient is subject to email address policies (the **EmailAddressPolicyEnabled** property is `True` for the recipient). <br/> > [!NOTE]>  The _Alias_ parameter never generates or updates the primary email address of a mail contact or a mail user.          |
| _Archive_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _Archive_ switch specifies whether to create an archive mailbox in the service in addition to the mailbox that's created in the service. <br/> You don't have to specify a value with this switch.  <br/> |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _DisplayName_ <br/> |Optional  <br/> |System.String  <br/> |The _DisplayName_ parameter specifies the display name of the mail user and the associated mailbox in the service. The display name is visible in the Exchange admin center, in address lists, and in Outlook. The maximum length is 256 characters. If the value contains spaces, enclose the value in quotation marks ("). <br/> If you don't use the _DisplayName_ parameter, the value of the _Name_ parameter is used for the display name. <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |The _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> |
| _FirstName_ <br/> |Optional  <br/> |System.String  <br/> |The _FirstName_ parameter specifies the user's first name. <br/> |
| _ImmutableId_ <br/> |Optional  <br/> |System.String  <br/> |The _ImmutableId_ parameter is used by GAL synchronization (GALSync) and specifies a unique and immutable identifier in the form of an SMTP address for an Exchange mailbox used for federated delegation when requesting Security Assertion Markup Language (SAML) tokens. If federation is configured for this mailbox and you don't set this parameter when you create the mailbox, Exchange creates the value for the immutable ID based upon the mailbox's **ExchangeGUID** and the federated account namespace, for example, 7a78e7c8-620e-4d85-99d3-c90d90f29699@mail.contoso.com. <br/> You need to set the _ImmutableId_ parameter if Active Directory Federation Services (AD FS) is deployed to allow single sign-on into an off-premises mailbox and AD FS is configured to use a different attribute than **ExchangeGUID** for sign-on token requests. Both, Exchange and AD FS must request the same token for the same user to ensure proper functionality for a cross-premises Exchange deployment scenario. <br/> The _ImmutableId_ parameter is used by GAL Synchronization (GALSync) and specifies a unique and immutable identifier in the form of an SMTP address for an Exchange mailbox that's used for federated delegation when requesting Security Assertion Markup Language (SAML) tokens. If federation is configured for this mailbox and you don't set this parameter when you create the mailbox, Exchange creates the value for the immutable identifier based upon the mailbox's **ExchangeGUID** and the federated account namespace, for example, 7a78e7c8-620e-4d85-99d3-c90d90f29699@mail.contoso.com. You must set the _ImmutableId_ parameter if Active Directory Federation Services (AD FS) is deployed to allow single sign-on into an off-premises mailbox and AD FS is configured to use a different attribute than **ExchangeGUID** for sign-on token requests. Both, Exchange and AD FS must request the same token for the same user to ensure proper functionality for a cross-premise Exchange deployment scenario. <br/> |
| _Initials_ <br/> |Optional  <br/> |System.String  <br/> |The _Initials_ parameter specifies the user's middle initials. <br/> |
| _LastName_ <br/> |Optional  <br/> |System.String  <br/> |The _LastName_ parameter specifies the user's last name. <br/> |
| _ModeratedBy_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.MultiValuedProperty  <br/> | The _ModeratedBy_ parameter specifies one or more moderators for this recipient. A moderator approves messages sent to the recipient before the messages are delivered. A moderator must be a mailbox, mail user, or mail contact in your organization. You can use any value that uniquely identifies the moderator. <br/>  For example: <br/>  Name <br/>  Display name <br/>  Alias <br/>  Distinguished name (DN) <br/>  Canonical DN <br/>  Email address <br/>  GUID <br/>  To enter multiple values and overwrite any existing entries, use the following syntax: `<value1>,<value2>...`. If the values contain spaces or otherwise require quotation marks, you need to use the following syntax:  `"<value1>","<value2>"...`.  <br/>  To add or remove one or more values without affecting any existing entries, use the following syntax: `@{Add="<value1>","<value2>"...; Remove="<value1>","<value2>"...}`.  <br/>  You need to use this parameter to specify at least one moderator when you set the _ModerationEnabled_ parameter to the value `$true`.  <br/> |
| _ModerationEnabled_ <br/> |Optional  <br/> |System.Boolean  <br/> | The _ModerationEnabled_ parameter specifies whether moderation is enabled for this recipient. Valid value are: <br/>  `$true`: Moderation is enabled for this recipient. Messages sent to this recipient must be approved by a moderator before the messages are delivered.  <br/>  `$false`: Moderation is disabled for this recipient. Messages sent to this recipient are delivered without the approval of a moderator. This is the default value.  <br/>  You use the _ModeratedBy_ parameter to specify the moderators. <br/> |
| _OnPremisesOrganizationalUnit_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.OrganizationalUnitIdParameter  <br/> | The _OnPremisesOrganizationalUnit_ parameter specifies the organizational unit (OU) in the on-premises organization in which the new mailbox is added (for example, redmond.contoso.com/Users). <br/>  Valid input for this parameter is an organizational unit (OU) or domain that's visible using the **Get-OrganizationalUnit** cmdlet. You can use any value that uniquely identifies the OU or domain. For example: <br/>  Name <br/>  Canonical name <br/>  Distinguished name (DN) <br/>  GUID <br/>  This parameter has no effect on the mailbox in the service. <br/> |
| _PrimarySmtpAddress_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.SmtpAddress  <br/> |The _PrimarySmtpAddress_ parameter specifies the primary return email address that's used for the recipient. If it's available on this cmdlet, you can't use the _EmailAddresses_ and _PrimarySmtpAddress_ parameters in the same command. <br/> |
| _RemotePowerShellEnabled_ <br/> |Optional  <br/> |System.Boolean  <br/> | The _RemotePowerShellEnabled_ parameter specifies whether the user can connect to Exchange using remote PowerShell. Remote PowerShell is required to open the Exchange Management Shell on Exchange servers, or to use Windows PowerShell open and import a remote PowerShell session to Exchange. Access to remote PowerShell is required even if you're trying to open the Exchange Management Shell on the local Exchange server. Valid values are: <br/>  `$true`: The user can use remote PowerShell. This is the default value.  <br/>  `$false`: The user can't use remote PowerShell.  <br/> |
| _RemoteRoutingAddress_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.ProxyAddress  <br/> |The _RemoteRoutingAddress_ parameter specifies the SMTP address of the mailbox in the service that this user is associated with. This address is created automatically when the service is initially configured in the format of <your domain>.mail.onmicrosoft.com. <br/> If you've configured mail flow between the on-premises organization and the service, such as in a hybrid deployment, you don't need to specify this parameter. The remote routing address is calculated automatically and assigned to the email address policy for the on-premises organization by the Hybrid Configuration wizard.  <br/> |
| _ResetPasswordOnNextLogon_ <br/> |Optional  <br/> |System.Boolean  <br/> | The _ResetPasswordOnNextLogon_ parameter specifies whether the user must change their password the next time they log on. Valid values are: <br/>  `$true`: The user is required to change their password the next time they log on.  <br/>  `$false`: The user isn't required to change their password the next time they log on. This is the default value.  <br/> |
| _SamAccountName_ <br/> |Optional  <br/> |System.String  <br/> |The _SamAccountName_ parameter (also known as the pre-Windows 2000 user account or group name) specifies an object identifier that's compatible with older versions of Microsoft Windows client and server operating systems. The value can contain letters, numbers, spaces, periods (.), and the characters !, #, $, %, ^, &amp;, -, _, {, }, and ~. The last character can't be a period. Unicode characters are allowed, but accented characters may generate collisions (for example, o and ö match). The maximum length is 20 characters. <br/> |
| _SendModerationNotifications_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Directory.Recipient.TransportModerationNotificationFlags  <br/> | The _SendModerationNotifications_ parameter specifies when moderation notification messages are sent. Valid values are: <br/>  `Always`: Notify all senders when their messages aren't approved. This is the default value.  <br/>  `Internal`: Notify senders in the organization when their messages aren't approved.  <br/>  `Never`: Don't notify anyone when a message isn't approved.  <br/>  This parameter is only meaningful when moderation is enabled (the _ModerationEnabled_ parameter has the value `$true`).  <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  


---
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online, Built-in security add-on for on-premises mailboxes
author: chrisda
external help file: Microsoft.Exchange.WebClient-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchangepowershell/set-casmailbox
schema: 2.0.0
title: Set-CASMailbox
---

# Set-CASMailbox

## SYNOPSIS
This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings might be exclusive to one environment or the other.

Use the Set-CASMailbox cmdlet to configure client access settings on a mailbox. For example, you can configure settings for Exchange ActiveSync, Outlook, Outlook on the web, POP3, and IMAP4.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Set-CASMailbox [-Identity] <MailboxIdParameter>
 [-ActiveSyncAllowedDeviceIDs <MultiValuedProperty>]
 [-ActiveSyncBlockedDeviceIDs <MultiValuedProperty>]
 [-ActiveSyncDebugLogging <Boolean>]
 [-ActiveSyncEnabled <Boolean>]
 [-ActiveSyncMailboxPolicy <MailboxPolicyIdParameter>]
 [-ActiveSyncSuppressReadReceipt <Boolean>]
 [-Confirm]
 [-DisplayName <String>]
 [-DomainController <Fqdn>]
 [-ECPEnabled <Boolean>]
 [-EmailAddresses <ProxyAddressCollection>]
 [-EwsAllowEntourage <Boolean>]
 [-EwsAllowList <MultiValuedProperty>]
 [-EwsAllowMacOutlook <Boolean>]
 [-EwsAllowOutlook <Boolean>]
 [-EwsApplicationAccessPolicy <EwsApplicationAccessPolicy>]
 [-EwsBlockList <MultiValuedProperty>]
 [-EwsEnabled <Boolean>]
 [-HasActiveSyncDevicePartnership <Boolean>]
 [-IgnoreDefaultScope]
 [-ImapEnabled <Boolean>]
 [-ImapEnableExactRFC822Size <Boolean>]
 [-ImapMessagesRetrievalMimeFormat <MimeTextFormat>]
 [-ImapForceICalForCalendarRetrievalOption <Boolean>]
 [-ImapSuppressReadReceipt <Boolean>]
 [-ImapUseProtocolDefaults <Boolean>]
 [-IsOptimizedForAccessibility <Boolean>]
 [-MacOutlookEnabled <Boolean>]
 [-MAPIBlockOutlookExternalConnectivity <Boolean>]
 [-MAPIBlockOutlookNonCachedMode <Boolean>]
 [-MAPIBlockOutlookRpcHttp <Boolean>]
 [-MAPIBlockOutlookVersions <String>]
 [-MAPIEnabled <Boolean>]
 [-MapiHttpEnabled <Boolean>]
 [-Name <String>]
 [-OneWinNativeOutlookEnabled <System.Boolean>]
 [-OutlookMobileEnabled <Boolean>]
 [-OWAEnabled <Boolean>]
 [-OWAforDevicesEnabled <Boolean>]
 [-OwaMailboxPolicy <MailboxPolicyIdParameter>]
 [-PopEnabled <Boolean>]
 [-PopEnableExactRFC822Size <Boolean>]
 [-PopForceICalForCalendarRetrievalOption <Boolean>]
 [-PopMessagesRetrievalMimeFormat <MimeTextFormat>]
 [-PopSuppressReadReceipt <Boolean>]
 [-PopUseProtocolDefaults <Boolean>]
 [-PrimarySmtpAddress <SmtpAddress>]
 [-PublicFolderClientAccess <Boolean>]
 [-ResetAutoBlockedDevices]
 [-SamAccountName <String>]
 [-ShowGalAsDefaultView <Boolean>]
 [-SmtpClientAuthenticationDisabled <Boolean>]
 [-UniversalOutlookEnabled <Boolean>]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
You need to be assigned permissions before you can run this cmdlet. Although this article lists all parameters for the cmdlet, you might not have access to some parameters if they aren't included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Set-CASMailbox adam@contoso.com -OWAEnabled $false -PopEnabled $false
```

This example disables Outlook on the web and POP3 access for the user adam@contoso.com.

### Example 2
```powershell
Set-CASMailbox adam@contoso.com -ActiveSyncDebugLogging $true -ActiveSyncMailboxPolicy Management
```

This example enables Exchange ActiveSync debug logging and specifies the Exchange ActiveSync mailbox policy named Management for the user adam@contoso.com.

### Example 3
```powershell
Set-CASMailbox tony@contoso.com -DisplayName "Tony Smith" -MAPIBlockOutlookRpcHttp $true
```

This example sets the display name and disables Outlook Anywhere access for the user tony@contoso.com.

## PARAMETERS

### -Identity

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online, Built-in security add-on for on-premises mailboxes

The Identity parameter specifies the mailbox that you want to configure. You can use any value that uniquely identifies the mailbox. For example:

- Name
- Alias
- Distinguished name (DN)
- Canonical DN
- Domain\\Username
- Email address
- GUID
- LegacyExchangeDN
- SamAccountName
- User ID or user principal name (UPN)

```yaml
Type: MailboxIdParameter
Parameter Sets: (All)
Aliases:

Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -ActiveSyncAllowedDeviceIDs

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

TheActiveSyncAllowedDeviceIDs parameter specifies one or more Exchange ActiveSync device IDs that are allowed to synchronize with the mailbox. A device ID is a text string that uniquely identifies the device. Use the Get-MobileDevice cmdlet to see the devices that have Exchange ActiveSync partnerships with the mailbox.

To enter multiple values and overwrite any existing entries, use the following syntax: `Value1,Value2,...ValueN`. If the values contain spaces or otherwise require quotation marks, use the following syntax: `"Value1","Value2",..."ValueN"`.

To add or remove one or more values without affecting any existing entries, use the following syntax: `@{Add="Value1","Value2"...; Remove="Value3","Value4"...}`.

To clear the list of device IDs, use the value $null for this parameter.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ActiveSyncBlockedDeviceIDs

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The ActiveSyncBlockedDeviceIDs parameter specifies one or more Exchange ActiveSync device IDs that aren't allowed to synchronize with the mailbox. A device ID is a text string that uniquely identifies the device. Use the Get-MobileDevice cmdlet to see the devices that have Exchange ActiveSync partnerships with the mailbox.

To enter multiple values and overwrite any existing entries, use the following syntax: `Value1,Value2,...ValueN`. If the values contain spaces or otherwise require quotation marks, use the following syntax: `"Value1","Value2",..."ValueN"`.

To add or remove one or more values without affecting any existing entries, use the following syntax: `@{Add="Value1","Value2"...; Remove="Value3","Value4"...}`.

To clear the list of device IDs, use the value $null for this parameter.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ActiveSyncDebugLogging

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The ActiveSyncDebugLogging parameter enables or disables Exchange ActiveSync debug logging for the mailbox. Valid values are:

- $true: ActiveSync debug logging is enabled for 48 hours in Exchange Online, and 72 hours in Exchange Server. After the time period expires, the value reverts to $false.
- $false: ActiveSync debug logging is disabled. This value is the default

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ActiveSyncEnabled

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The ActiveSyncEnabled parameter enables or disables access to the mailbox using Exchange ActiveSync. Valid values are:

- $true: Access to the mailbox using ActiveSync is enabled. This value is the default.
- $false. Access to the mailbox using ActiveSync is disabled. Other ActiveSync settings in this cmdlet are ignored.

For more information, see [Enable or disable Exchange ActiveSync for a mailbox in Exchange Online](https://learn.microsoft.com/exchange/recipients-in-exchange-online/manage-user-mailboxes/enable-or-disable-exchange-activesync), or [Enable or disable Exchange ActiveSync access to mailboxes in Exchange Server](https://learn.microsoft.com/exchange/clients/exchange-activesync/activesync-mailbox-access).

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ActiveSyncMailboxPolicy

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The ActiveSyncMailboxPolicy parameter specifies the Exchange ActiveSync mailbox policy for the mailbox. You can use any value that uniquely identifies the Exchange ActiveSync mailbox policy. For example:

- Name
- Distinguished name (DN)
- GUID

The name of the default Exchange ActiveSync mailbox policy is Default. However, to reset this parameter back to the default value, use the value $null. The value $null also changes the value of the ActiveSyncMailboxPolicyIsDefaulted property to True. If you specify the value Default for the ActiveSyncMailboxPolicy parameter, the value of the ActiveSyncMailboxPolicyIsDefaulted property remains False.

```yaml
Type: MailboxPolicyIdParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ActiveSyncSuppressReadReceipt

> Applicable: Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The ActiveSyncSuppressReadReceipt parameter controls the behavior of read receipts for Exchange ActiveSync clients that access the mailbox. Valid values are:

- $true: Read receipts are not automatically returned when the user opens a message sent with a read receipt request.
- $false: A read receipt is automatically returned when the user opens a message sent with a read receipt request. This value is the default.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online, Built-in security add-on for on-premises mailboxes

The Confirm switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding.

- Destructive cmdlets (for example, Remove-\* cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.
- Most other cmdlets (for example, New-\* and Set-\* cmdlets) don't have a built-in pause. For these cmdlets, specifying the Confirm switch without a value introduces a pause that forces you acknowledge the command before proceeding.

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

### -DisplayName

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

This parameter is available only in on-premises Exchange.

The DisplayName parameter specifies the display name of the mailbox. The display name is visible in the Exchange admin center and in address lists. The maximum length is 256 characters. If the value contains spaces, enclose the value in quotation marks (").

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

### -DomainController

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

This parameter is available only in on-premises Exchange.

The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ECPEnabled

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

This parameter is available only in on-premises Exchange.

The ECPEnabled parameter enables or disables access the Exchange admin center (EAC) or the Exchange Control Panel (ECP) for the specified user. Valid values are:

- $true: Access to the EAC or ECP is enabled. This value is the default.
- $false: Access to the EAC or ECP is disabled.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EmailAddresses

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

This parameter is available only in on-premises Exchange.

The EmailAddresses parameter specifies all email addresses (proxy addresses) for the recipient, including the primary SMTP address. In on-premises Exchange organizations, the primary SMTP address and other proxy addresses are typically set by email address policies. However, you can use this parameter to configure other proxy addresses for the recipient. For more information, see [Email address policies in Exchange Server](https://learn.microsoft.com/Exchange/email-addresses-and-address-books/email-address-policies/email-address-policies).

Valid syntax for this parameter is `"Type:EmailAddress1","Type:EmailAddress2",..."Type:EmailAddressN"`. The optional `Type` value specifies the type of email address. Examples of valid values include:

- SMTP: The primary SMTP address. You can use this value only once in a command.
- smtp: Other SMTP email addresses.
- X400: X.400 addresses in on-premises Exchange.
- X500: X.500 addresses in on-premises Exchange.

If you don't include a Type value for an email address, the address is assumed to be an SMTP email address. The syntax of SMTP email addresses is validated, but the syntax of other email address types isn't validated. Therefore, you need to verify that any custom addresses are formatted correctly.

To specify the primary SMTP email address, you can use any of the following methods:

- Use the Type value SMTP on the address.
- The first email address when you don't use any Type values, or when you use multiple lowercase smtp Type values.
- Use the PrimarySmtpAddress parameter instead. You can't use the EmailAddresses parameter and the PrimarySmtpAddress parameter in the same command.

To replace all existing proxy email addresses with the values you specify, use the following syntax: `"Type:EmailAddress1","Type:EmailAddress2",..."Type:EmailAddressN"`.

To add or remove specify proxy addresses without affecting other existing values, use the following syntax: `@{Add="Type:EmailAddress1","Type:EmailAddress2",...; Remove="Type:EmailAddress3","Type:EmailAddress4",...}`.

```yaml
Type: ProxyAddressCollection
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EwsAllowEntourage

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The EwsAllowEntourage parameter enables or disables access to the mailbox by Microsoft Entourage clients that use Exchange Web Services (for example, Entourage 2008 for Mac, Web Services Edition).

- $true: Access to the mailbox using Microsoft Entourage is enabled. This value is the default.
- $false: Access to the mailbox using Microsoft Entourage is disabled.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EwsAllowList

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The EwsAllowList parameter specifies the Exchange Web Services applications (user agent strings) that are allowed to access the mailbox.

To enter multiple values and overwrite any existing entries, use the following syntax: `Value1,Value2,...ValueN`. If the values contain spaces or otherwise require quotation marks, use the following syntax: `"Value1","Value2",..."ValueN"`.

To add or remove one or more values without affecting any existing entries, use the following syntax: `@{Add="Value1","Value2"...; Remove="Value3","Value4"...}`.

This parameter is meaningful only when the EwsEnabled parameter is set to $true, and the EwsApplicationAccessPolicy parameter is set to EnforceAllowList.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EwsAllowMacOutlook

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The EwsAllowMacOutlook parameter enables or disables access to the mailbox by Outlook for Mac clients that use Exchange Web Services (for example, Outlook for Mac 2011 or later). Valid values are:

- $true: Outlook for Mac clients that use EWS are allowed to access the mailbox. This value is the default.
- $false: Outlook for Mac clients that use EWS are not allowed to access the mailbox.

In the cloud-based service, access for Outlook for Mac clients that use Microsoft Sync technology is controlled by the MacOutlookEnabled parameter.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EwsAllowOutlook

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The EwsAllowOutlook parameter enables or disables access to the mailbox by Outlook clients that use Exchange Web Services. Outlook uses Exchange Web Services for free/busy, out-of-office settings, and calendar sharing. Valid values are:

- $true: Access to the mailbox using EWS in Outlook clients is enabled.
- $false: Access to the mailbox using EWS in Outlook client is disabled.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EwsApplicationAccessPolicy

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The EwsApplicationAccessPolicy parameter controls access to the mailbox using Exchange Web Services applications.

Valid values for this parameter are:

- EnforceAllowList: Only applications specified in the EwsAllowList parameter are allowed to access the mailbox.
- EnforceBlockList: Applications specified in the EwsBlockList parameter aren't allowed to access the mailbox, but any other applications can access the mailbox.

This parameter doesn't affect access to the mailbox using Entourage, Outlook for Mac, and Outlook. Access to the mailbox using these clients is controlled by the EwsAllowEntourage, EwsAllowMacOutlook and EwsAllowOutlook parameters.

```yaml
Type: EwsApplicationAccessPolicy
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EwsBlockList

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The EwsBlockList parameter specifies the Exchange Web Services applications (user agent strings) that aren't allowed to access the mailbox using Exchange Web Services.

To enter multiple values and overwrite any existing entries, use the following syntax: `Value1,Value2,...ValueN`. If the values contain spaces or otherwise require quotation marks, use the following syntax: `"Value1","Value2",..."ValueN"`.

To add or remove one or more values without affecting any existing entries, use the following syntax: `@{Add="Value1","Value2"...; Remove="Value3","Value4"...}`.

This parameter is meaningful only when the EwsEnabled parameter is set to $true, and the EwsApplicationAccessPolicy parameter is set to EnforceBlockList.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EwsEnabled

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The EwsEnabled parameter enables or disables access to the mailbox using Exchange Web Services clients. Valid values are:

- $true: Access to the mailbox using EWS is enabled. This value is the default.
- $false: Access to the mailbox using EWS is disabled. Other Exchange Web Services settings in this cmdlet are ignored.

The value of this parameter is meaningful only if the EwsEnabled parameter on the Set-OrganizationConfig parameter isn't set to the value $false.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: True
Accept pipeline input: False
Accept wildcard characters: False
```

### -HasActiveSyncDevicePartnership

> Applicable: Exchange Server 2010

This parameter is available only in Exchange Server 2010.

The HasActiveSyncDevicePartnership parameter specifies whether the mailbox has an Exchange ActiveSync device partnership established. Valid values are:

- $true: The mailbox has an ActiveSync device partnership.
- $false: The mailbox does not have an ActiveSync device partnership.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IgnoreDefaultScope

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

This parameter is available only in on-premises Exchange.

The IgnoreDefaultScope switch tells the command to ignore the default recipient scope setting for the Exchange PowerShell session, and to use the entire forest as the scope. You don't need to specify a value with this switch.

This switch enables the command to access Active Directory objects that aren't currently available in the default scope, but also introduces the following restrictions:

- You can't use the DomainController parameter. The command uses an appropriate global catalog server automatically.
- You can only use the DN for the Identity parameter. Other forms of identification, such as alias or GUID, aren't accepted.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ImapEnabled

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The ImapEnabled parameter enables or disables access to the mailbox using IMAP4 clients. Valid values are:

- $true: Access to the mailbox using IMAP4 is enabled. This value is the default.
- $fale: Access to the mailbox using IMAP4 is disabled. The other IMAP4 settings in this cmdlet are ignored.

For more information, see [Enable or Disable POP3 or IMAP4 access for a user in Exchange Online](https://learn.microsoft.com/exchange/clients-and-mobile-in-exchange-online/pop3-and-imap4/enable-or-disable-pop3-or-imap4-access), or [Enable or disable POP3 or IMAP4 access to mailboxes in Exchange Server](https://learn.microsoft.com/exchange/clients/pop3-and-imap4/configure-mailbox-access).

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ImapEnableExactRFC822Size

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

This parameter is available only in on-premises Exchange.

The ImapEnableExactRFC822Size parameter specifies how message sizes are presented to IMAP4 clients that access the mailbox. Valid values are:

- $true: Calculate the exact message size.
- $false: Use an estimated message size. This value is the default.

We don't recommend changing this value unless you determine that the default setting causes problems for IMAP4 clients. To change the value of this parameter, you also need to set the value of the ImapUseProtocolDefaults parameter to $false.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ImapForceICalForCalendarRetrievalOption

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The ImapForceICalForCalendarRetrievalOption parameter specifies how meeting requests are presented to IMAP4 clients that access the mailbox. Valid values are:

- $true: All meeting requests are in the iCal format.
- $false: All meeting requests appear as Outlook on the web links. This value is the default.

To change the value of this parameter, you also need to set the value of the ImapUseProtocolDefaults parameter to $false.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ImapMessagesRetrievalMimeFormat

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The ImapMessagesRetrievalMimeFormat parameter specifies the message format for IMAP4 clients that access the mailbox. You can use an integer or a text value. Valid values are:

- 0: TextOnly
- 1: HtmlOnly
- 2: HtmlAndTextAlternative
- 3: TextEnrichedOnly
- 4: TextEnrichedAndTextAlternative
- 5: BestBodyFormat (this is the default value)
- 6: Tnef

To change the value of this parameter, you also need to set the value of the ImapUseProtocolDefaults parameter to $false.

```yaml
Type: MimeTextFormat
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ImapSuppressReadReceipt

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The ImapSuppressReadReceipt parameter controls the behavior of read receipts for IMAP4 clients that access the mailbox. Valid values are:

- $true: The user receives a read receipt when the recipient opens the message.
- $false: The user receives two read receipts: one when the message is downloaded and another when the message is opened. This value is the default.

To change the value of this parameter, you also need to set the value of the ImapUseProtocolDefaults parameter to $false.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ImapUseProtocolDefaults

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The ImapUseProtocolDefaults parameter specifies whether to use the IMAP4 protocol defaults for the mailbox. Valid values are:

- $true: Use the protocol defaults for IMAP4 access to the mailbox. This value is the default.
- $false: Use custom protocol settings for IMAP4 access to the mailbox.

You need to set this parameter to $false when you use any of the following IMAP4 parameters:

- ImapEnableExactRFC822Size
- ImapForceICalForCalendarRetrievalOption
- ImapMessagesRetrievalMimeFormat
- ImapSuppressReadReceipt

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IsOptimizedForAccessibility

> Applicable: Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

This parameter is functional only in on-premises Exchange.

The IsOptimizedForAccessibility parameter specifies whether the mailbox is configured to use the light version of Outlook on the web. Valid values are:

- $true: The mailbox is configured to use the light version of Outlook on the web.
- $false: The mailbox isn't configured to use the light version of Outlook on the web.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MacOutlookEnabled

> Applicable: Exchange Online

This parameter is available only in the cloud-based service.

The MacOutlookEnabled parameter enables or disables access to the mailbox using Outlook for Mac clients that use Microsoft Sync technology. Valid values are:

- $true: Access to the mailbox using Outlook for Mac clients is enabled. This value is the default.
- $false: Access to the mailbox using Outlook for Mac clients is disabled.

Access for older Outlook for Mac clients that use Exchange Web Services is controlled by the EwsAllowMacOutlook parameter.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MAPIBlockOutlookNonCachedMode

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

This parameter is available only in on-premises Exchange.

The MAPIBlockOutlookNonCachedMode parameter controls access to the mailbox using Outlook in online or offline mode. Valid values are:

- $true: Only Outlook clients that are configured to use Cached Exchange Mode (offline mode) are allowed to access the mailbox.
- $false: The state of the Cached Exchange Mode setting isn't checked before Outlook clients are allowed to access the mailbox (online mode and offline mode are allowed). This value is the default.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MAPIBlockOutlookExternalConnectivity

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

This parameter is available only in on-premises Exchange.

The MAPIBlockOutlookExternalConnectivity parameter enables or disables external access to the mailbox in Outlook by removing the external URLs from the Autodiscover response. This setting affects Outlook Anywhere, MAPI over HTTP, and Exchange Web Services (EWS). Valid values are:

- $true: External Outlook clients can't use Outlook Anywhere, MAPI over HTTP, or EWS to access the mailbox.
- $false: External Outlook clients can use Outlook Anywhere, MAPI over HTTP, or EWS to access the mailbox.

**Note**: If your organization uses the same Autodiscover URL values for internal and external clients, setting this parameter to $true doesn't block access for external clients.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MAPIBlockOutlookRpcHttp

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

This parameter is available only in on-premises Exchange.

The MAPIBlockOutlookRpcHttp parameter enables or disables access to the mailbox in Outlook using Outlook Anywhere. Valid values are:

- $true: Access to the mailbox using Outlook Anywhere is disabled.
- $false: Access to the mailbox using Outlook Anywhere is enabled. This value is the default.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MAPIBlockOutlookVersions

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

This parameter is available only in on-premises Exchange.

The MAPIBlockOutlookVersions parameter blocks access to the mailbox for specific versions of Outlook.

For example, if you specify the value 15.0.4569, only Outlook 2013 Service Pack 1 (SP1) or later clients are allowed to access the mailbox. Earlier versions of Outlook are blocked.

The default value is blank. To reset this parameter, use the value $null.

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

### -MAPIEnabled

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The MAPIEnabled parameter enables or disables access to the mailbox using MAPI clients (for example, Outlook). Valid values are:

- $true: Access to the mailbox using MAPI clients is enabled. This value is the default.
- $false: Access to the mailbox using MAPI clients is disabled. The other MAPI settings in this cmdlet are ignored.

For more information, see[Enable or disable MAPI for a mailbox in Exchange Online](https://learn.microsoft.com/exchange/recipients-in-exchange-online/manage-user-mailboxes/enable-or-disable-mapi), or [Enable or disable MAPI access to mailboxes in Exchange Server](https://learn.microsoft.com/exchange/clients/mapi-mailbox-access).

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MapiHttpEnabled

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

This parameter is available only in on-premises Exchange.

The MapiHttpEnabled parameter enables or disables access to the mailbox in Outlook using MAPI over HTTP. Valid values are:

- $true: Access to the mailbox using MAPI over HTTP is enabled.
- $false: Access to the mailbox using MAPI over HTTP is disabled.
- $null (blank): The setting isn't configured. The mailbox uses the organization setting for MAPI over HTTP (the MapiHttpEnabled parameter on the Set-OrganizationConfig cmdlet). This value is the default.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Name

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

This parameter is available only in on-premises Exchange.

The Name parameter specifies the unique name of the mailbox. The maximum length is 64 characters. If the value contains spaces, enclose the value in quotation marks (").

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

### -OneWinNativeOutlookEnabled

> Applicable: Exchange Online

This parameter is available only in the cloud-based service.

The OneWinNativeOutlookEnabled parameter enables or disables access to the mailbox using the new Outlook for Windows.
Valid values are:

- $true: Access to the mailbox using the new Outlook for Windows is enabled. This value is the default.
- $false: Access to the mailbox using the new Outlook for Windows is disabled.

```yaml
Type: System.Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OutlookMobileEnabled

> Applicable: Exchange Online

This parameter is available only in the cloud-based service.

The OutlookMobileEnabled parameter enables or disables access to the mailbox using Outlook for iOS and Android. Valid values are:

- $true: Access to the mailbox using Outlook for iOS and Android is enabled. This value is the default.
- $false: Access to the mailbox using Outlook for iOS and Android is disabled.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OWAEnabled

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The OWAEnabled parameter enables or disables access to the mailbox using Outlook on the web (formerly known as Outlook Web App or OWA) and the new Outlook for Windows. Valid values are:

- $true: Access to the mailbox using Outlook on the web is enabled. This value is the default.
- $false: Access to the mailbox using Outlook on the web and the new Outlook for Windows is disabled. The other Outlook on the web settings in this cmdlet are ignored.

For more information, see [Enable or disable Outlook on the web for a mailbox in Exchange Online](https://learn.microsoft.com/exchange/recipients-in-exchange-online/manage-user-mailboxes/enable-or-disable-outlook-web-app), or [Enable or disable Outlook on the web access to mailboxes in Exchange Server](https://learn.microsoft.com/exchange/clients/outlook-on-the-web/mailbox-access).

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OWAforDevicesEnabled

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The OWAforDevicesEnabled parameter enables or disables access to the mailbox using the older Outlook Web App (OWA) app on iOS and Android devices. Valid values are:

- $true: Access to the mailbox using OWA for Devices is enabled. This value is the default.
- $false: Access to the mailbox using OWA for Devices is disabled.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OwaMailboxPolicy

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The OwaMailboxPolicy parameter specifies the Outlook on the web mailbox policy for the mailbox. You can use any value that uniquely identifies the Outlook on the web mailbox policy. For example:

- Name
- Distinguished name (DN)
- GUID

The name of the default Outlook on the web mailbox policy is Default.

```yaml
Type: MailboxPolicyIdParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PopEnabled

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The PopEnabled parameter enables or disables access to the mailbox using POP3 clients. Valid values are:

- $true: Access to the mailbox using POP3 clients is enabled. This value is the default.
- $false: Access to the mailbox using POP3 clients is disabled. The other POP3 settings in this cmdlet are ignored.

For more information, see [Enable or Disable POP3 or IMAP4 access for a user in Exchange Online](https://learn.microsoft.com/exchange/clients-and-mobile-in-exchange-online/pop3-and-imap4/enable-or-disable-pop3-or-imap4-access), or [Enable or disable POP3 or IMAP4 access to mailboxes in Exchange Server](https://learn.microsoft.com/exchange/clients/pop3-and-imap4/configure-mailbox-access).

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PopEnableExactRFC822Size

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

This parameter is available only in on-premises Exchange.

The PopEnableExactRFC822Size parameter specifies how message sizes are presented to POP3 clients that access the mailbox. Valid values are:

- $true: Calculate the exact message size.
- $false: Use an estimated message size. This value is the default

We don't recommend changing this value unless you determine that the default setting causes problems for POP3 clients. To change the value of this parameter, you also need to set the value of the PopUseProtocolDefaults parameter to $false.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PopForceICalForCalendarRetrievalOption

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The PopForceICalForCalendarRetrievalOption parameter specifies how meeting requests are presented to POP3 clients that access the mailbox. Valid values are:

- $true: All meeting requests are in the iCal format.
- $false: All meeting requests appear as Outlook on the web links. This value is the default.

To change the value of this parameter, you also need to set the value of the PopUseProtocolDefaults parameter to $false.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PopMessagesRetrievalMimeFormat

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The PopMessagesRetrievalMimeFormat parameter specifies the message format for POP3 clients that access the mailbox. You can use an integer or a text value. Valid values are:

- 0: TextOnly
- 1: HtmlOnly
- 2: HtmlAndTextAlternative
- 3: TextEnrichedOnly
- 4: TextEnrichedAndTextAlternative
- 5: BestBodyFormat (this is the default value)
- 6: Tnef

To change the value of this parameter, you also need to set the value of the PopUseProtocolDefaults parameter to $false.

```yaml
Type: MimeTextFormat
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PopSuppressReadReceipt

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The PopSuppressReadReceipt parameter controls the behavior of read receipts for POP3 clients that access the mailbox. Valid values are:

- $true: The user receives a read receipt when the recipient opens the message.
- $false: The user receives two read receipts: one when the message is downloaded and another when the message is opened. This value is the default.

To change the value of this parameter, you also need to set the value of the PopUseProtocolDefaults parameter to $false.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PopUseProtocolDefaults

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The PopUseProtocolDefaults parameter specifies whether to use the POP3 protocol defaults for the mailbox. Valid values are:

- $true: Use the protocol defaults for POP3 access to the mailbox. This value is the default.
- $false: Use custom protocol settings for POP3 access to the mailbox.

You need to set this parameter to $false when you use any of following parameters:

- PopEnableExactRFC822Size
- PopForceICalForCalendarRetrievalOption
- PopMessagesRetrievalMimeFormat
- PopSuppressReadReceipt

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PrimarySmtpAddress

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

This parameter is available only in on-premises Exchange.

The PrimarySmtpAddress parameter specifies the primary return email address that's used for the recipient. You can't use the EmailAddresses and PrimarySmtpAddress parameters in the same command.

```yaml
Type: SmtpAddress
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PublicFolderClientAccess

> Applicable: Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The PublicFolderClientAccess parameter enables or disables access to public folders in Microsoft Outlook. Valid values are:

- $true: The user can access public folders in Outlook if the value of the PublicFolderShowClientControl parameter on the Set-OrganizationConfig cmdlet is $true (the default value is $false).
- $false: The user can't access public folders in Outlook if the value of the PublicFolderShowClientControl parameter on the Set-OrganizationConfig cmdlet is $true. This value is the default.

```yaml
Type: Boolean
Parameter Sets: AdfsAuthenticationRawConfiguration, AdfsAuthenticationParameter
Aliases:

Required: False
Position: Named
Default value: $false
Accept pipeline input: False
Accept wildcard characters: False
```

### -ResetAutoBlockedDevices

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

This parameter is available only in on-premises Exchange.

The ResetAutoBlockedDevices switch resets the status of blocked mobile devices that have exceeded the limits defined by the Set-ActiveSyncDeviceAutoblockThreshold cmdlet. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SamAccountName

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

This parameter is available only in on-premises Exchange.

The SamAccountName parameter (also known as the pre-Windows 2000 user account or group name) specifies an object identifier that's compatible with older versions of Microsoft Windows client and server operating systems. The value can contain letters, numbers, spaces, periods (.), and the following characters: !, #, $, %, ^, &, -, \_, {, }, and ~. The last character can't be a period. Unicode characters are allowed, but accented characters might generate collisions (for example, o and ö match). The maximum length is 20 characters.

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

### -ShowGalAsDefaultView

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The ShowGalAsDefaultView parameter specifies whether the global address list (GAL) is the default recipient picker for messages. Valid values are:

- $true: Use the GAL as the primary address picker. This value is the default.
- $false: Don't use the GAL as the primary address picker.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SmtpClientAuthenticationDisabled

> Applicable: Exchange Online

This parameter is available only in the cloud-based service.

The SmtpClientAuthenticationDisabled parameter specifies whether to disable authenticated SMTP (SMTP AUTH) for the mailbox. Examples of clients and services that require authenticated SMTP to send email messages include:

- POP3 and IMAP4 clients.
- Devices with scan to email capability.
- Workflow applications that send email notifications.
- Online services that send messages using internal email addresses in the organization.

Valid values for this parameter are:

- $true: Authenticated SMTP is disabled for the mailbox.
- $false: Authenticated SMTP is enabled for the mailbox.
- blank ($null): This value is the default. The authenticated SMTP setting for the mailbox is controlled by the corresponding SmtpClientAuthenticationDisabled parameter on the Set-TransportConfig cmdlet for the whole organization.

To selectively enable authenticated SMTP for specific mailboxes only: disable authenticated SMTP at the organizational level ($true), enable it for the specific mailboxes ($false), and leave the rest of the mailboxes with their default value ($null).

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UniversalOutlookEnabled

> Applicable: Exchange Online

This parameter is available only in the cloud-based service.

The UniversalOutlookEnabled parameter enables or disables access to the mailbox using Windows 10 Mail and Calendar. Valid values are:

- $true: Access to the mailbox using Windows 10 Mail and Calendar is enabled. This value is the default.
- $false: Access to the mailbox using Windows 10 Mail and Calendar is disabled.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online, Built-in security add-on for on-premises mailboxes

The WhatIf switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

### Input types
To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

### Output types
To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS

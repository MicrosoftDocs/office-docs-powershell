---
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
schema: 2.0.0
---

# set-CASMailbox

## SYNOPSIS
!!! Exchange Server 2010

Use the Set-CASMailbox cmdlet to set attributes related to client access for Microsoft Exchange ActiveSync, Microsoft Office Outlook Web App, POP3, and IMAP4 for a specified user.

!!! Exchange Server 2013

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the Set-CASMailbox cmdlet to configure client access settings on a mailbox. For example, you can configure settings for MicrosoftExchange ActiveSync, MicrosoftOutlook Web App, POP3, and IMAP4.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

!!! Exchange Server 2016, Exchange Online

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the Set-CASMailbox cmdlet to configure client access settings on a mailbox. For example, you can configure settings for Exchange ActiveSync, Outlook, Outlook on the web, POP3, and IMAP4.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
set-CASMailbox [-Identity] <MailboxIdParameter> [-ActiveSyncAllowedDeviceIDs <MultiValuedProperty>]
 [-ActiveSyncBlockedDeviceIDs <MultiValuedProperty>] [-ActiveSyncDebugLogging <$true | $false>]
 [-ActiveSyncEnabled <$true | $false>] [-ActiveSyncMailboxPolicy <MailboxPolicyIdParameter>] [-Confirm]
 [-DisplayName <String>] [-DomainController <Fqdn>] [-ECPEnabled <$true | $false>]
 [-EmailAddresses <ProxyAddressCollection>] [-EmwsEnabled <$true | $false>]
 [-EwsAllowEntourage <$true | $false>] [-EwsAllowList <MultiValuedProperty>]
 [-EwsAllowMacOutlook <$true | $false>] [-EwsAllowOutlook <$true | $false>]
 [-EwsApplicationAccessPolicy <EnforceAllowList | EnforceBlockList>] [-EwsBlockList <MultiValuedProperty>]
 [-EwsEnabled <$true | $false>] [-HasActiveSyncDevicePartnership <$true | $false>] [-IgnoreDefaultScope]
 [-ImapEnabled <$true | $false>] [-ImapEnableExactRFC822Size <$true | $false>]
 [-ImapMessagesRetrievalMimeFormat <TextOnly | HtmlOnly | HtmlAndTextAlternative | TextEnrichedOnly | TextEnrichedAndTextAlternative | BestBodyFormat | Tnef>]
 [-ImapSuppressReadReceipt <$true | $false>] [-ImapUseProtocolDefaults <$true | $false>]
 [-MAPIBlockOutlookNonCachedMode <$true | $false>] [-MAPIBlockOutlookRpcHttp <$true | $false>]
 [-MAPIBlockOutlookVersions <String>] [-MAPIEnabled <$true | $false>] [-Name <String>]
 [-OWAEnabled <$true | $false>] [-OwaMailboxPolicy <MailboxPolicyIdParameter>] [-PopEnabled <$true | $false>]
 [-PopEnableExactRFC822Size <$true | $false>]
 [-PopMessagesRetrievalMimeFormat <TextOnly | HtmlOnly | HtmlAndTextAlternative | TextEnrichedOnly | TextEnrichedAndTextAlternative | BestBodyFormat | Tnef>]
 [-PopSuppressReadReceipt <$true | $false>] [-PopUseProtocolDefaults <$true | $false>]
 [-PrimarySmtpAddress <SmtpAddress>] [-SamAccountName <String>] [-ShowGalAsDefaultView <$true | $false>]
 [-WhatIf] [-ImapForceICalForCalendarRetrievalOption <$true | $false>]
 [-MAPIBlockOutlookExternalConnectivity <$true | $false>] [-MapiHttpEnabled <$true | $false>]
 [-OWAforDevicesEnabled <$true | $false>] [-PopForceICalForCalendarRetrievalOption <$true | $false>]
 [-ResetAutoBlockedDevices] [-ActiveSyncSuppressReadReceipt <$true | $false>]
 [-IsOptimizedForAccessibility <$true | $false>] [-UniversalOutlookEnabled <$true | $false>]
 [<CommonParameters>]
```

## DESCRIPTION
!!! Exchange Server 2010

The Set-CASMailbox cmdlet operates on one mailbox at a time. You can configure properties for Outlook Web App, Exchange ActiveSync, POP3, and IMAP4 by using this cmdlet. You can configure a single property or multiple properties by using one statement.

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "Client Access user settings" entry in the Client Access Permissions topic.

!!! Exchange Server 2013

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "Client protocol settings" entry in the Recipients Permissions topic.

!!! Exchange Server 2016, Exchange Online

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### Example 1 -------------------------- (Exchange Server 2010)
```
Set-CASMailbox -Identity adam@contoso.com -OWAEnabled:$true -POPEnabled:$true
```

This example enables Outlook Web App and enables POP3 for the user adam@contoso.com.

### Example 1 -------------------------- (Exchange Server 2013)
```
Set-CASMailbox adam@contoso.com -OWAEnabled $false -PopEnabled $false
```

This example disables Outlook Web App and POP3 access for the user adam@contoso.com.

### Example 1 -------------------------- (Exchange Server 2016)
```
Set-CASMailbox adam@contoso.com -OWAEnabled $false -PopEnabled $false
```

This example disables Outlook on the web and POP3 access for the user adam@contoso.com.

### Example 1 -------------------------- (Exchange Online)
```
Set-CASMailbox adam@contoso.com -OWAEnabled $false -PopEnabled $false
```

This example disables Outlook on the web and POP3 access for the user adam@contoso.com.

### Example 2 -------------------------- (Exchange Server 2010)
```
Set-CASMailbox -Identity adam@contoso.com -ActiveSyncDebugLogging:$true -ActiveSyncMailboxPolicy "Management" -MAPIBlockOutlookRpcHttp:$true
```

This example enables Exchange ActiveSync logging, blocks Outlook Anywhere, and specifies the Exchange ActiveSync mailbox policy for the user adam@contoso.com.

### Example 2 -------------------------- (Exchange Server 2013)
```
Set-CASMailbox adam@contoso.com -ActiveSyncDebugLogging $true -ActiveSyncMailboxPolicy Management
```

This example enables Exchange ActiveSync debug logging and specifies the Exchange ActiveSync mailbox policy named Management for the user adam@contoso.com.

### Example 2 -------------------------- (Exchange Server 2016)
```
Set-CASMailbox adam@contoso.com -ActiveSyncDebugLogging $true -ActiveSyncMailboxPolicy Management
```

This example enables Exchange ActiveSync debug logging and specifies the Exchange ActiveSync mailbox policy named Management for the user adam@contoso.com.

### Example 2 -------------------------- (Exchange Online)
```
Set-CASMailbox adam@contoso.com -ActiveSyncDebugLogging $true -ActiveSyncMailboxPolicy Management
```

This example enables Exchange ActiveSync debug logging and specifies the Exchange ActiveSync mailbox policy named Management for the user adam@contoso.com.

### Example 3 -------------------------- (Exchange Server 2010)
```
Set-CASMailbox -Identity tony@contoso.com -DisplayName "Tony Smith" -MAPIEnabled:$true
```

This example sets the display name and enables MAPI access for the user tony@contoso.com.

### Example 3 -------------------------- (Exchange Server 2013)
```
Set-CASMailbox tony@contoso.com -DisplayName "Tony Smith" -MAPIBlockOutlookRpcHttp $true
```

This example sets the display name and disables Outlook Anywhere access for the user tony@contoso.com.

### Example 3 -------------------------- (Exchange Server 2016)
```
Set-CASMailbox tony@contoso.com -DisplayName "Tony Smith" -MAPIBlockOutlookRpcHttp $true
```

This example sets the display name and disables Outlook Anywhere access for the user tony@contoso.com.

### Example 3 -------------------------- (Exchange Online)
```
Set-CASMailbox tony@contoso.com -DisplayName "Tony Smith" -MAPIBlockOutlookRpcHttp $true
```

This example sets the display name and disables Outlook Anywhere access for the user tony@contoso.com.

## PARAMETERS

### -Identity
!!! Exchange Server 2010

The Identity parameter specifies the mailbox ID. You can use the following values:

- GUID

- Distinguished name (DN)

- User principal name (UPN)

- SMTP address

- Alias



!!! Exchange Server 2013

The Identity parameter specifies the mailbox that you want to configure.

This parameter accepts the following values:

- Alias (for example, JPhillips)

- Canonical DN (for example, Atlanta.Corp.Contoso.Com/Users/JPhillips)

- Display Name (for example, Jeff Phillips)

- Distinguished Name (DN) (for example, CN=JPhillips,CN=Users,DC=Atlanta,DC=Corp,DC=contoso,DC=com)

- Domain\\Account (for example, Atlanta\\JPhillips)

- GUID (for example, fb456636-fe7d-4d58-9d15-5af57d0354c2)

- Immutable ID (for example, fb456636-fe7d-4d58-9d15-5af57d0354c2@contoso.com)

- Legacy Exchange DN (for example, /o=Contoso/ou=AdministrativeGroup/cn=Recipients/cn=JPhillips)

- SMTP Address (for example, Jeff.Phillips@contoso.com)

- User Principal Name (for example, JPhillips@contoso.com)



!!! Exchange Server 2016, Exchange Online

The Identity parameter specifies the mailbox that you want to configure. You can use any value that uniquely identifies the mailbox.

For example:

- Name

- Display name

- Alias

- Distinguished name (DN)

- Canonical DN

- \<domain name\>\\\<account name\>

- Email address

- GUID

- LegacyExchangeDN

- SamAccountName

- User ID or user principal name (UPN)



```yaml
Type: MailboxIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -ActiveSyncAllowedDeviceIDs
!!! Exchange Server 2010

The ActiveSyncAllowedDeviceIDs parameter accepts a list of device IDs that are allowed to synchronize with the mailbox.

However, devices are not blocked from synchronizing unless this parameter is used together with settings that are defined by the set-ActiveSyncOrganizationSettings -DefaultAccessLevel cmdlet.

When you use the set-ActiveSyncOrganizationSettings -DefaultAccessLevel cmdlet, devices can still be blocked if they do not comply with a specific ActiveSync policy, regardless of whether the device is allowed by the list that is provided to ActiveSyncAllowedDeviceIDs.

For more information about the set-ActiveSyncOrganizationSettings -DefaultAccessLevel cmdlet, see Set-ActiveSyncOrganizationSettings



!!! Exchange Server 2013

The ActiveSyncAllowedDeviceIDs parameter specifies one or more Exchange ActiveSync device IDs that are allowed to synchronize with the mailbox. A device ID is a text string that uniquely identifies the device. Use the Get-MobileDevice cmdlet to see the devices that have Exchange ActiveSync partnerships with the mailbox.

To enter multiple values and overwrite any existing entries, use the following syntax: \<value1\>,\<value2\>.... If the values contain spaces or otherwise require quotation marks, you need to use the following syntax: "\<value1\>","\<value2\>"....

To add or remove one or more values without affecting any existing entries, use the following syntax: @{Add="\<value1\>","\<value2\>"...; Remove="\<value1\>","\<value2\>"...}.

To clear the list of device IDs, use the value $null for this parameter.



!!! Exchange Server 2016, Exchange Online

TheActiveSyncAllowedDeviceIDs parameter specifies one or more Exchange ActiveSync device IDs that are allowed to synchronize with the mailbox. A device ID is a text string that uniquely identifies the device. Use the Get-MobileDevice cmdlet to see the devices that have Exchange ActiveSync partnerships with the mailbox.

To enter multiple values and overwrite any existing entries, use the following syntax: \<value1\>,\<value2\>.... If the values contain spaces or otherwise require quotation marks, you need to use the following syntax: "\<value1\>","\<value2\>"....

To add or remove one or more values without affecting any existing entries, use the following syntax: @{Add="\<value1\>","\<value2\>"...; Remove="\<value1\>","\<value2\>"...}.

To clear the list of device IDs, use the value $null for this parameter.



```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ActiveSyncBlockedDeviceIDs
!!! Exchange Server 2010

The ActiveSyncBlockedDeviceIDs parameter accepts a list of device IDs that aren't allowed to synchronize with the mailbox.



!!! Exchange Server 2013, Exchange Server 2016, Exchange Online

The ActiveSyncBlockedDeviceIDs parameter specifies one or more Exchange ActiveSync device IDs that aren't allowed to synchronize with the mailbox. A device ID is a text string that uniquely identifies the device. Use the Get-MobileDevice cmdlet to see the devices that have Exchange ActiveSync partnerships with the mailbox.

To enter multiple values and overwrite any existing entries, use the following syntax: \<value1\>,\<value2\>.... If the values contain spaces or otherwise require quotation marks, you need to use the following syntax: "\<value1\>","\<value2\>"....

To add or remove one or more values without affecting any existing entries, use the following syntax: @{Add="\<value1\>","\<value2\>"...; Remove="\<value1\>","\<value2\>"...}.

To clear the list of device IDs, use the value $null for this parameter.



```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ActiveSyncDebugLogging
!!! Exchange Server 2010

The ActiveSyncDebugLogging parameter specifies whether logging is enabled for debugging purposes for Exchange ActiveSync.



!!! Exchange Server 2013

The ActiveSyncDebugLogging parameter enables or disables Exchange ActiveSync debug logging for the mailbox. Valid input for this parameter is $true or $false. The default value is $false.



!!! Exchange Server 2016, Exchange Online

The ActiveSyncDebugLogging parameter enables or disables Exchange ActiveSync debug logging for the mailbox. Valid input for this parameter is $true or $false. The default value is $false.

This parameter is primarily for troubleshooting and will revert to $false in 48 hours for Exchange Online, and in 72 hours for Exchange Server.



```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ActiveSyncEnabled
!!! Exchange Server 2010

The ActiveSyncEnabled parameter specifies whether to enable Exchange ActiveSync.



!!! Exchange Server 2013

The ActiveSyncEnabled parameter enables or disables Exchange ActiveSync for the mailbox. Valid input for this parameter is $true or $false. The default value is $true. Note that when you set this parameter to $false, the other Exchange ActiveSync settings in this cmdlet are ignored.



!!! Exchange Server 2016, Exchange Online

The ActiveSyncEnabled parameter enables or disables Exchange ActiveSync for the mailbox. Valid input for this parameter is $true or $false. The default value is $true. When you set this parameter to $false, the other Exchange ActiveSync settings in this cmdlet are ignored.



```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ActiveSyncMailboxPolicy
!!! Exchange Server 2010

The ActiveSyncMailboxPolicy parameter specifies the name of the Exchange ActiveSync mailbox policy for the mailbox.



!!! Exchange Server 2013, Exchange Server 2016, Exchange Online

The ActiveSyncMailboxPolicy parameter specifies the Exchange ActiveSync mailbox policy for the mailbox. You can use any value that uniquely identifies the Exchange ActiveSync mailbox policy. For example:

- Name

- Distinguished name (DN)

- GUID

The name of the default Exchange ActiveSync mailbox policy is Default.



```yaml
Type: MailboxPolicyIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
The Confirm switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding.

- Destructive cmdlets (for example, Remove-\* cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: -Confirm:$false.

- Most other cmdlets (for example, New-\* and Set-\* cmdlets) don't have a built-in pause. For these cmdlets, specifying the Confirm switch without a value introduces a pause that forces you acknowledge the command before proceeding.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DisplayName
!!! Exchange Server 2010

The DisplayName parameter specifies the display name for the mailbox.



!!! Exchange Server 2013

This parameter is available only in on-premises Exchange.

The DisplayName parameter specifies the display name for the mailbox.



!!! Exchange Server 2016, Exchange Online

This parameter is available only in on-premises Exchange.

The DisplayName parameter specifies the display name of the mailbox. The display name is visible in the Exchange admin center and in address lists. The maximum length is 256 characters. If the value contains spaces, enclose the value in quotation marks (").



```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController
!!! Exchange Server 2010

The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.



!!! Exchange Server 2013, Exchange Server 2016, Exchange Online

This parameter is available only in on-premises Exchange.

The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.



```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ECPEnabled
!!! Exchange Server 2010

The ECPEnabled parameter specifies whether the Web management interface is enabled on this Client Access server.



!!! Exchange Server 2013, Exchange Server 2016, Exchange Online

This parameter is available only in on-premises Exchange.

The ECPEnabled parameter enables or disables access to the Exchange admin center (EAC) for the specified user. Valid input for this parameter is $true or $false. The default value is $true.



```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EmailAddresses
!!! Exchange Server 2010

The EmailAddresses parameter specifies the e-mail address for the mailbox.



!!! Exchange Server 2013

This parameter is available only in on-premises Exchange.

The EmailAddresses parameter specifies all the proxy addresses of the recipient. It includes the primary SMTP address as one of the proxy addresses. Typically, the primary SMTP address and other proxy address are set by email address policies. However, you can use this parameter to configure other proxy addresses for the recipient. For more information, see Email address policies.

Valid syntax for this parameter is [\<Type\>]:\<emailaddress1\>,[\<Type\>]:\<emailaddress2\>.... The optional \<Type\> value indicates the type of email address. Some examples of valid type values include:

- SMTP The primary SMTP address

- smtp Other SMTP email addresses

- X400 X.400 addresses

- X500 X.500 addresses

If you don't include a \<Type\> value for an email address, the value smtp is assumed.

To specify the primary SMTP email address, you can use any of the following methods:

- Use the \<Type\> value SMTP.

- The first email address when you don't use the \<Type\> value SMTP, and when you don't use any \<Type\> values, or when there are multiple \<Type\> values of smtp

- Use the PrimarySmtpAddress parameter instead. You can't use the EmailAddresses parameter and the PrimarySmtpAddress parameter in the same command.

When you specify one or more proxy address by using the EmailAddresses parameter, those values replace any exiting proxy addresses that are configured for the recipient. To add or remove specify proxy addresses without affecting other values, use the following syntax: @{Add="[\<Type\>]:\<emailaddress1\>","[\<Type\>]:\<emailaddress2\>"...; Remove="[\<Type\>]:\<emailaddress2\>","[\<Type\>]:\<emailaddress2\>"...}

Exchange doesn't validate custom address types (including X.400 addresses) for proper formatting. You need to ensure that any custom addresses comply with the format requirements for that address type.



!!! Exchange Server 2016, Exchange Online

This parameter is available only in on-premises Exchange.

The EmailAddresses parameter specifies all the email addresses (proxy addresses) for the recipient, including the primary SMTP address. In on-premises Exchange organizations, the primary SMTP address and other proxy addresses are typically set by email address policies. However, you can use this parameter to configure other proxy addresses for the recipient. For more information, see Email address policies in Exchange 2016 (https://technet.microsoft.com/library/bb232171.aspx).

Valid syntax for this parameter is \<Type\>:\<emailaddress1\>,\<Type\>:\<emailaddress2\>.... The optional \<Type\> value specifies the type of email address. Some examples of valid values include:

- SMTP: The primary SMTP address. You can use this value only once in a command.

- smtp: Other SMTP email addresses.

- X400: X.400 addresses in on-premises Exchange.

- X500: X.500 addresses in on-premises Exchange.

If you don't include a \<Type\> value for an email address, the value smtp is assumed. Note that Exchange doesn't validate the syntax of custom address types (including X.400 addresses). Therefore, you need to verify that any custom addresses are formatted correctly.

To specify the primary SMTP email address, you can use any of the following methods:

- Use the \<Type\> value SMTP on the address.

- The first email address when you don't use any \<Type\> values, or when you use multiple \<Type\> values of smtp.

- If it's available, use the PrimarySmtpAddress parameter instead. You can't use the EmailAddresses parameter and the PrimarySmtpAddress parameter in the same command.

To replace all existing proxy email addresses with the values you specify, use the following syntax: "\<Type\>:\<emailaddress1\>","\<Type\>:\<emailaddress2\>"....

To add or remove specify proxy addresses without affecting other existing values, use the following syntax: @{Add="\<Type\>:\<emailaddress1\>","\<Type\>:\<emailaddress2\>"...; Remove="\<Type\>:\<emailaddress2\>","\<Type\>:\<emailaddress2\>"...}.



```yaml
Type: ProxyAddressCollection
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EmwsEnabled
The EmwsEnabled parameter specifies whether the Exchange Management Web Service is enabled on this Client Access server.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EwsAllowEntourage
!!! Exchange Server 2010

The EwsAllowEntourage parameter specifies whether to allow or disallow Entourage 2008 for Mac, Web Services Edition to access Exchange Web Services for the user. (Because Entourage 2008 is entirely based on Exchange Web Services, this parameter allows for enabling or disabling Entourage 2008.)



!!! Exchange Server 2013, Exchange Server 2016, Exchange Online

The EwsAllowEntourage parameter enables or disables access to the mailbox by Microsoft Entourage clients that use Exchange Web Services (for example, Entourage 2008 for Mac, Web Services Edition).

Valid input for this parameter is $true or $false. The default value is $true.



```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EwsAllowList
!!! Exchange Server 2010

The EwsAllowList parameter specifies the applications (user agent strings) that can access Exchange Web Services when the EwsApplicationAccessPolicy parameter is set to EnforceAllowList.



!!! Exchange Server 2013, Exchange Server 2016, Exchange Online

The EwsAllowList parameter specifies the Exchange Web Services applications (user agent strings) that are allowed to access the mailbox.

To enter multiple values and overwrite any existing entries, use the following syntax: \<value1\>,\<value2\>.... If the values contain spaces or otherwise require quotation marks, you need to use the following syntax: "\<value1\>","\<value2\>"....

To add or remove one or more values without affecting any existing entries, use the following syntax: @{Add="\<value1\>","\<value2\>"...; Remove="\<value1\>","\<value2\>"...}.

This parameter is meaningful only when the EwsEnabled parameter is set to $true, and the EwsApplicationAccessPolicy parameter is set to EnforceAllowList.



```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EwsAllowMacOutlook
!!! Exchange Server 2010

The EwsAllowMacOutlook parameter specifies whether to allow or disallow Microsoft Outlook for Mac 2011 (soon to be released as a beta) to access Exchange Web Services for the user. (Because Outlook for Mac 2011 is entirely based on Exchange Web Services, this parameter allows for enabling or disabling Outlook for Mac 2011.)



!!! Exchange Server 2013

The EwsAllowMacOutlook parameter enables or disables access to the mailbox by MicrosoftOutlook for Mac clients that use Exchange Web Services (for example, Outlook for Mac 2011).

Valid input for this parameter is $true or $false. The default value is $true.



!!! Exchange Server 2016, Exchange Online

The EwsAllowMacOutlook parameter enables or disables access to the mailbox by Outlook for Mac clients that use Exchange Web Services (for example, Outlook for Mac 2011 or later).

Valid input for this parameter is $true or $false. The default value is $true.



```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EwsAllowOutlook
!!! Exchange Server 2010

The EwsAllowOutlook parameter specifies whether to allow or disallow Microsoft Office Outlook 2007 to access Exchange Web Services for the user. Outlook uses Exchange Web Services for free/busy, out-of-office settings, and calendar sharing.



!!! Exchange Server 2013

The EwsAllowOutlook parameter enables or disables access to the mailbox by MicrosoftOutlook clients that use Exchange Web Services. Outlook uses Exchange Web Services for free/busy, out-of-office settings, and calendar sharing.



!!! Exchange Server 2016, Exchange Online

The EwsAllowOutlook parameter enables or disables access to the mailbox by Outlook clients that use Exchange Web Services. Outlook uses Exchange Web Services for free/busy, out-of-office settings, and calendar sharing.



```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EwsApplicationAccessPolicy
!!! Exchange Server 2010

The EwsApplicationAccessPolicy parameter specifies which applications other than Entourage, Outlook for Mac 2011 and Outlook can access Exchange Web Services. If set to EnforceAllowList, only applications specified in the EwsAllowList parameter are allowed access to Exchange Web Services. If set to EnforceBlockList, every application is allowed access to Exchange Web Services except the ones specified in the EwsBlockList parameter.



!!! Exchange Server 2013

The EwsApplicationAccessPolicy parameter controls access to the mailbox by using Exchange Web Services applications.

Valid values for this parameter are:

- EnforceAllowList Only applications specified in the EwsAllowList parameter are allowed to access the mailbox.

- EnforceBlockList Applications specified in the EwsBlockList parameter aren't allowed to access the mailbox, but any other applications can access the mailbox.

This parameter doesn't affect access to the mailbox by using Entourage, Outlook for Mac, and Outlook. Access to the mailbox by using these clients is controlled by the EwsAllowEntourage, EwsAllowMacOutlook and EwsAllowOutlook parameters.



!!! Exchange Server 2016, Exchange Online

The EwsApplicationAccessPolicy parameter controls access to the mailbox by using Exchange Web Services applications.

Valid values for this parameter are:

- EnforceAllowList: Only applications specified in the EwsAllowList parameter are allowed to access the mailbox.

- EnforceBlockList: Applications specified in the EwsBlockList parameter aren't allowed to access the mailbox, but any other applications can access the mailbox.

This parameter doesn't affect access to the mailbox by using Entourage, Outlook for Mac, and Outlook. Access to the mailbox by using these clients is controlled by the EwsAllowEntourage, EwsAllowMacOutlook and EwsAllowOutlook parameters.



```yaml
Type: EnforceAllowList | EnforceBlockList
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EwsBlockList
!!! Exchange Server 2010

The EwsBlockList parameter specifies the applications (user agent strings) that can't access Exchange Web Services when the EwsApplicationAccessPolicy parameter is set to EnforceBlockList.



!!! Exchange Server 2013, Exchange Server 2016, Exchange Online

The EwsBlockList parameter specifies the Exchange Web Services applications (user agent strings) that aren't allowed to access the mailbox by using Exchange Web Services.

To enter multiple values and overwrite any existing entries, use the following syntax: \<value1\>,\<value2\>.... If the values contain spaces or otherwise require quotation marks, you need to use the following syntax: "\<value1\>","\<value2\>"....

To add or remove one or more values without affecting any existing entries, use the following syntax: @{Add="\<value1\>","\<value2\>"...; Remove="\<value1\>","\<value2\>"...}.

This parameter is meaningful only when the EwsEnabled parameter is set to $true, and the EwsApplicationAccessPolicy parameter is set to EnforceBlockList.



```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EwsEnabled
!!! Exchange Server 2010

The EwsEnabled parameter specifies whether to globally enable or disable Exchange Web Services access for the user, regardless of which application is making the request.

When the EwsEnabled parameter is set to $false, Exchange Web Services access is turned off regardless of the values of the EwsAllowEntourage parameter. In other words, for the EwsAllowEntourage parameter to be meaningful, Exchange Web Services must be enabled in the first place and thus the EwsEnabled parameter must be set to $true.



!!! Exchange Server 2013, Exchange Server 2016, Exchange Online

The EwsEnabled parameter enables or disables access to the mailbox by using Exchange Web Services clients.

Valid input for this parameter is $true or $false. The default value is $true. Note that when you set this parameter to $false, the other Exchange Web Services settings in this cmdlet are ignored.



```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -HasActiveSyncDevicePartnership
The HasActiveSyncDevicePartnership parameter specifies whether the mailbox has an ActiveSync device partnership established.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IgnoreDefaultScope
!!! Exchange Server 2010

The IgnoreDefaultScope parameter instructs the command to ignore the default recipient scope setting for the Exchange Management Shell session and use the entire forest as the scope. This allows the command to access Active Directory objects that aren't currently in the default scope. Using the IgnoreDefaultScope parameter introduces the following restrictions:

- You can't use the DomainController parameter. The command uses an appropriate global catalog server automatically.

- You can only use the DN for the Identity parameter. Other forms of identification, such as alias or GUID, aren't accepted.



!!! Exchange Server 2013

This parameter is available only in on-premises Exchange.

The IgnoreDefaultScope parameter instructs the command to ignore the default recipient scope setting for the Exchange Management Shell session and use the entire forest as the scope. This allows the command to access Active Directory objects that aren't currently in the default scope. Using the IgnoreDefaultScope parameter introduces the following restrictions:

- You can't use the DomainController parameter. The command uses an appropriate global catalog server automatically.

- You can only use the DN for the Identity parameter. Other forms of identification, such as alias or GUID, aren't accepted.



!!! Exchange Server 2016, Exchange Online

This parameter is available only in on-premises Exchange.

The IgnoreDefaultScope switch tells the command to ignore the default recipient scope setting for the Exchange Management Shell session, and to use the entire forest as the scope. This allows the command to access Active Directory objects that aren't currently available in the default scope.

Using the IgnoreDefaultScope switch introduces the following restrictions:

- You can't use the DomainController parameter. The command uses an appropriate global catalog server automatically.

- You can only use the DN for the Identity parameter. Other forms of identification, such as alias or GUID, aren't accepted.



```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ImapEnabled
!!! Exchange Server 2010

The ImapEnabled parameter specifies whether the IMAP4 protocol is enabled for this mailbox.



!!! Exchange Server 2013, Exchange Server 2016, Exchange Online

The ImapEnabled parameter enables or disables access to the mailbox by using IMAP4 clients.

Valid input for this parameter is $true or $false. The default value is $true. Note that when you set this parameter to $false, the other IMAP4 settings in this cmdlet are ignored.



```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ImapEnableExactRFC822Size
!!! Exchange Server 2010

The ImapEnableExactRFC822Size parameter specifies the IMAP4 cache size.



!!! Exchange Server 2013

This parameter is available only in on-premises Exchange.

The ImapEnableExactRFC822Size parameter specifies how message sizes are presented to IMAP4 clients that access the mailbox.

Valid values for this parameter are:

- $true Calculate the exact message size.

- $false Use an estimated message size.

The default value is $false.

We don't recommend changing this value unless you determine that the default setting causes problems for IMAP4 clients. To change the value of this parameter, you also need to set the value of the ImapUseProtocolDefaults parameter to $false.



!!! Exchange Server 2016, Exchange Online

This parameter is available only in on-premises Exchange.

The ImapEnableExactRFC822Size parameter specifies how message sizes are presented to IMAP4 clients that access the mailbox.

Valid values for this parameter are:

- $true: Calculate the exact message size.

- $false: Use an estimated message size.

The default value is $false.

We don't recommend changing this value unless you determine that the default setting causes problems for IMAP4 clients. To change the value of this parameter, you also need to set the value of the ImapUseProtocolDefaults parameter to $false.



```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ImapMessagesRetrievalMimeFormat
!!! Exchange Server 2010

The ImapMessagesRetrievalMimeFormat parameter specifies the format of the messages retrieved from the server. The possible values are:

- 0:TextOnly

- 1:HtmlOnly

- 2:HtmlAndTextAlternative

- 3:TextEnrichedOnly

- 4:TextEnrichedAndTextAlternative

- 5:BestBodyFormat

- 6:Tnef



!!! Exchange Server 2013, Exchange Server 2016, Exchange Online

The ImapMessagesRetrievalMimeFormat parameter specifies the message format for IMAP4 clients that access the mailbox. You can use an integer or a text value. Valid values are:

- 0: TextOnly

- 1: HtmlOnly

- 2: HtmlAndTextAlternative

- 3: TextEnrichedOnly

- 4: TextEnrichedAndTextAlternative

- 5: BestBodyFormat

- 6: Tnef

The default value is BestBodyFormat.

To change the value of this parameter, you also need to set the value of the ImapUseProtocolDefaults parameter to $false.



```yaml
Type: TextOnly | HtmlOnly | HtmlAndTextAlternative | TextEnrichedOnly | TextEnrichedAndTextAlternative | BestBodyFormat | Tnef
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ImapSuppressReadReceipt
!!! Exchange Server 2010

The IMAPSuppressReadReceipt parameter specifies whether to stop duplicate read receipts from being sent to IMAP4 senders that are using the "send read receipt for messages I send" option in their IMAP4 e-mail program. This option is set to $false by default. By default, IMAP4 senders that use the "send read receipt for messages I send" option receive a read receipt in both of the following circumstances:

- When messages they send are downloaded by the recipient.

- When the recipient opens the message.

The valid values and descriptions for this parameter are:

- $false IMAP4 users are sent a read receipt each time a recipient downloads a message. IMAP4 users are also sent a read receipt when the user opens the message.

- $true IMAP4 users that use the "send read receipt for messages I send" option in their e-mail client programs will only receive a read receipt when the recipient opens the message.



!!! Exchange Server 2013

The ImapSuppressReadReceipt parameter controls the behavior of read receipts for IMAP4 clients that access the mailbox.

Valid values for this parameter are:

- $true The user receives a read receipt when the recipient opens the message.

- $false The user receives two read receipts: one when the message is downloaded and another when the message is opened.

The default value is $false.

To change the value of this parameter, you also need to set the value of the ImapUseProtocolDefaults parameter to $false.



!!! Exchange Server 2016, Exchange Online

The ImapSuppressReadReceipt parameter controls the behavior of read receipts for IMAP4 clients that access the mailbox.

Valid values for this parameter are:

- $true: The user receives a read receipt when the recipient opens the message.

- $false: The user receives two read receipts: one when the message is downloaded and another when the message is opened.

The default value is $false.

To change the value of this parameter, you also need to set the value of the ImapUseProtocolDefaults parameter to $false.



```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ImapUseProtocolDefaults
!!! Exchange Server 2010

The ImapUseProtocolDefaults parameter specifies whether to use protocol defaults for the IMAP4 protocol.



!!! Exchange Server 2013, Exchange Server 2016, Exchange Online

The ImapUseProtocolDefaults parameter specifies whether to use the IMAP4 protocol defaults for the mailbox. Valid input for this parameter is $true or $false. The default value is $true.

You need to set the ImapUseProtocolDefaults parameter to $false when you use any of the following IMAP4 parameters:

- ImapEnableExactRFC822Size

- ImapForceICalForCalendarRetrievalOption

- ImapMessagesRetrievalMimeFormat

- ImapSuppressReadReceipt



```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MAPIBlockOutlookNonCachedMode
!!! Exchange Server 2010

The MAPIBlockOutlookNonCachedMode parameter specifies whether Microsoft Outlook can be used in online mode.



!!! Exchange Server 2013

This parameter is available only in on-premises Exchange.

The MAPIBlockOutlookNonCachedMode parameter controls access to the mailbox by using MicrosoftOutlook in online or offline mode.

Valid values for this parameter are:

- $true Only Outlook clients that are configured to use Cached Exchange Mode (offline mode) are allowed to access the mailbox.

- $false The state of the Cached Exchange Mode setting isn't checked before Outlook clients are allowed to access the mailbox (online mode and offline mode are allowed).

The default value is $false.



!!! Exchange Server 2016, Exchange Online

This parameter is available only in on-premises Exchange.

The MAPIBlockOutlookNonCachedMode parameter controls access to the mailbox by using Outlook in online or offline mode.

Valid values for this parameter are:

- $true: Only Outlook clients that are configured to use Cached Exchange Mode (offline mode) are allowed to access the mailbox.

- $false: The state of the Cached Exchange Mode setting isn't checked before Outlook clients are allowed to access the mailbox (online mode and offline mode are allowed).

The default value is $false.



```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MAPIBlockOutlookRpcHttp
!!! Exchange Server 2010

The MAPIBlockOutlookRpcHttp parameter specifies whether clients can connect to Outlook by using Outlook Anywhere.



!!! Exchange Server 2013

This parameter is available only in on-premises Exchange.

The MAPIBlockOutlookRpcHttp parameter enables or disables access to the mailbox by using Outlook Anywhere (RPC over HTTP) in MicrosoftOutlook.

Valid values for this parameter are:

- $true Only Outlook clients that aren't configured to use Outlook Anywhere (RPC over HTTP) are allowed to access the mailbox. By default, Outlook 2013 is configured to use Outlook Anywhere.

- $false Outlook clients that are configured to use Outlook Anywhere (RPC over HTTP) are allowed to access the mailbox.

The default value is $false.



!!! Exchange Server 2016, Exchange Online

This parameter is available only in on-premises Exchange.

The MAPIBlockOutlookRpcHttp parameter enables or disables access to the mailbox in Outlook by using Outlook Anywhere. Valid values are:

- $true: Access to the mailbox by using Outlook Anywhere is disabled.

- $false: Access to the mailbox by using Outlook Anywhere is enabled. This is the default value.



```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MAPIBlockOutlookVersions
!!! Exchange Server 2010

The MAPIBlockOutlookVersions parameter specifies whether certain versions of Outlook are blocked.



!!! Exchange Server 2013

This parameter is available only in on-premises Exchange.

The MAPIBlockOutlookVersions parameter blocks access to the mailbox for specific versions of Outlook.

For example, if you specify the value 15.0.4569.1503, only Outlook 2013 Service Pack 1 (SP1) or later clients are allowed to access the mailbox. Earlier versions of Outlook are blocked.



!!! Exchange Server 2016, Exchange Online

This parameter is available only in on-premises Exchange.

The MAPIBlockOutlookVersions parameter blocks access to the mailbox for specific versions of Outlook.

For example, if you specify the value 15.0.4569.1503, only Outlook 2013 Service Pack 1 (SP1) or later clients are allowed to access the mailbox. Earlier versions of Outlook are blocked.

The default value is blank. To reset this parameter, use the value $null.



```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MAPIEnabled
!!! Exchange Server 2010

The MAPIEnabled parameter specifies whether the MAPI protocol is enabled for the mailbox.



!!! Exchange Server 2013

The MAPIEnabled parameter enables or disables access to the mailbox by using MAPI clients (for example, MicrosoftOutlook).

Valid input for this parameter is $true or $false. The default value is $true. Note that when you set this parameter to $false, the other MAPI settings in this cmdlet are ignored.



!!! Exchange Server 2016, Exchange Online

The MAPIEnabled parameter enables or disables access to the mailbox by using MAPI clients (for example, Outlook).

Valid input for this parameter is $true or $false. The default value is $true. Note that when you set this parameter to $false, the other MAPI settings in this cmdlet are ignored.



```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Name
!!! Exchange Server 2010

The Name parameter specifies the name of the mailbox.



!!! Exchange Server 2013

This parameter is available only in on-premises Exchange.

The Name parameter specifies the name of the mailbox.



!!! Exchange Server 2016, Exchange Online

This parameter is available only in on-premises Exchange.

The Name parameter specifies the unique name of the mailbox. The maximum length is 64 characters. If the value contains spaces, enclose the value in quotation marks (").



```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OWAEnabled
!!! Exchange Server 2010

The OWAEnabled parameter enables Outlook Web App.



!!! Exchange Server 2013

The OWAEnabled parameter enables or disables access to the mailbox by using Outlook Web App.

Valid input for this parameter is $true or $false. The default value is $true. Note that when you set this parameter to $false, the other Outlook Web App settings in this cmdlet are ignored.



!!! Exchange Server 2016, Exchange Online

The OWAEnabled parameter enables or disables access to the mailbox by using Outlook on the web.

Valid input for this parameter is $true or $false. The default value is $true. Note that when you set this parameter to $false, the other Outlook on the web settings in this cmdlet are ignored.



```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OwaMailboxPolicy
!!! Exchange Server 2010

The OwaMailboxPolicy parameter specifies the active Outlook Web App mailbox policy.



!!! Exchange Server 2013

The OwaMailboxPolicy parameter specifies the Outlook Web App mailbox policy for the mailbox. You can use any value that uniquely identifies the Outlook Web App mailbox policy. For example:

- Name

- Distinguished name (DN)

- GUID

The name of the default Outlook Web App mailbox policy is Default.



!!! Exchange Server 2016, Exchange Online

The OwaMailboxPolicy parameter specifies the Outlook on the web mailbox policy for the mailbox. You can use any value that uniquely identifies the Outlook on the web mailbox policy. For example:

- Name

- Distinguished name (DN)

- GUID

The name of the default Outlook on the web mailbox policy is Default.



```yaml
Type: MailboxPolicyIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PopEnabled
!!! Exchange Server 2010

The PopEnabled parameter specifies whether the POP3 protocol is enabled for a mailbox.



!!! Exchange Server 2013, Exchange Server 2016, Exchange Online

The PopEnabled parameter enables or disables access to the mailbox by using POP3 clients.

Valid input for this parameter is $true or $false. The default value is $true. Note that when you set this parameter to $false, the other POP3 settings in this cmdlet are ignored.



```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PopEnableExactRFC822Size
!!! Exchange Server 2010

The PopEnableExactRFC822Size parameter specifies the size of the POP3 cache.



!!! Exchange Server 2013

This parameter is available only in on-premises Exchange.

The PopEnableExactRFC822Size parameter specifies how message sizes are presented to POP3 clients that access the mailbox.

Valid values for this parameter are:

- $true Calculate the exact message size.

- $false Use an estimated message size.

The default value is $false.

We don't recommend changing this value unless you determine that the default setting causes problems for POP3 clients. To change the value of this parameter, you also need to set the value of the PopUseProtocolDefaults parameter to $false.



!!! Exchange Server 2016, Exchange Online

This parameter is available only in on-premises Exchange.

The PopEnableExactRFC822Size parameter specifies how message sizes are presented to POP3 clients that access the mailbox.

Valid values for this parameter are:

- $true: Calculate the exact message size.

- $false: Use an estimated message size.

The default value is $false.

We don't recommend changing this value unless you determine that the default setting causes problems for POP3 clients. To change the value of this parameter, you also need to set the value of the PopUseProtocolDefaults parameter to $false.



```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PopMessagesRetrievalMimeFormat
!!! Exchange Server 2010

The PopMessagesRetrievalMimeFormat parameter specifies the format of the messages retrieved from the server. The possible values are:

- 0:TextOnly

- 1:HtmlOnly

- 2:HtmlAndTextAlternative

- 3:TextEnrichedOnly

- 4:TextEnrichedAndTextAlternative

- 5:BestBodyFormat

- 6:Tnef



!!! Exchange Server 2013, Exchange Server 2016, Exchange Online

The PopMessagesRetrievalMimeFormat parameter specifies the message format for POP3 clients that access the mailbox. You can use an integer or a text value. Valid values are:

- 0: TextOnly

- 1: HtmlOnly

- 2: HtmlAndTextAlternative

- 3: TextEnrichedOnly

- 4: TextEnrichedAndTextAlternative

- 5: BestBodyFormat

- 6: Tnef

The default value is BestBodyFormat.

To change the value of this parameter, you also need to set the value of the PopUseProtocolDefaults parameter to $false.



```yaml
Type: TextOnly | HtmlOnly | HtmlAndTextAlternative | TextEnrichedOnly | TextEnrichedAndTextAlternative | BestBodyFormat | Tnef
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PopSuppressReadReceipt
!!! Exchange Server 2010

The PopSuppressReadReceipt parameter specifies whether to stop duplicate read receipts from being sent to POP3 senders that are using the "send read receipt for messages I send" option in their POP3 e-mail program. This option is set to $false by default. By default, POP3 senders that use the "send read receipt for messages I send" option receive a read receipt in both of the following circumstances:

- When messages they send are downloaded by the recipient.

- When the recipient opens the message.

The valid values and descriptions for this parameter are:

- $false POP3 users are sent a read receipt each time a recipient downloads a message. POP3 users are also sent a read receipt when the user opens the message.

- $true POP3 users that use the "send read receipt for messages I send" option in their e-mail client programs will only receive a read receipt when the recipient opens the message.



!!! Exchange Server 2013

The PopSuppressReadReceipt parameter controls the behavior of read receipts for POP3 clients that access the mailbox.

Valid values for this parameter are:

- $true The user receives a read receipt when the recipient opens the message.

- $false The user receives two read receipts: one when the message is downloaded and another when the message is opened.

The default value is $false.

To change the value of this parameter, you also need to set the value of the PopUseProtocolDefaults parameter to $false.



!!! Exchange Server 2016, Exchange Online

The PopSuppressReadReceipt parameter controls the behavior of read receipts for POP3 clients that access the mailbox.

Valid values for this parameter are:

- $true: The user receives a read receipt when the recipient opens the message.

- $false: The user receives two read receipts: one when the message is downloaded and another when the message is opened.

The default value is $false.

To change the value of this parameter, you also need to set the value of the PopUseProtocolDefaults parameter to $false.



```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PopUseProtocolDefaults
!!! Exchange Server 2010

The PopUseProtocolDefaults parameter specifies whether to use protocol defaults for the POP3 protocol.



!!! Exchange Server 2013, Exchange Server 2016, Exchange Online

The PopUseProtocolDefaults parameter specifies whether to use the POP3 protocol defaults for the mailbox.

Valid input for this parameter is $true or $false. The default value is $true. You need to set the PopUseProtocolDefaults parameter to $false when you use any of following parameters:

- PopEnableExactRFC822Size

- PopForceICalForCalendarRetrievalOption

- PopMessagesRetrievalMimeFormat

- PopSuppressReadReceipt



```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PrimarySmtpAddress
!!! Exchange Server 2010

The PrimarySmtpAddress parameter specifies the primary SMTP address associated with the mailbox.



!!! Exchange Server 2013

This parameter is available only in on-premises Exchange.

The PrimarySmtpAddress parameter specifies the primary SMTP email address for the mailbox. This is the From address that external recipients see when they receive a message from this mailbox.

You can't use the PrimarySmtpAddress parameter and the EmailAddresses parameter in the same command.



!!! Exchange Server 2016, Exchange Online

This parameter is available only in on-premises Exchange.

The PrimarySmtpAddress parameter specifies the primary return email address that's used for the recipient. If it's available on this cmdlet, you can't use the EmailAddresses and PrimarySmtpAddress parameters in the same command.



```yaml
Type: SmtpAddress
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SamAccountName
!!! Exchange Server 2010

The SamAccountName parameter specifies the security account name.



!!! Exchange Server 2013

This parameter is available only in on-premises Exchange.

The SamAccountName parameter specifies an account identifier that's compatible with older operating systems. The value of this parameter must be less than 20 characters, and can contain letters, numbers, and the following characters:

- !

- #

- $

- %

- ^

- &

- -

- .

- \_

- {

- }

- |

- ~



!!! Exchange Server 2016, Exchange Online

This parameter is available only in on-premises Exchange.

The SamAccountName parameter (also known as the pre-Windows 2000 user account or group name) specifies an object identifier that's compatible with older versions of Microsoft Windows client and server operating systems. The value can contain letters, numbers, spaces, periods (.), and the characters !, #, $, %, ^, &, -, \_, {, }, and ~. The last character can't be a period. Unicode characters are allowed, but accented characters may generate collisions (for example, o and ö match). The maximum length is 20 characters.



```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ShowGalAsDefaultView
!!! Exchange Server 2010

The ShowGalAsDefaultView parameter specifies that the global address list (gal) is shown by default when adding message recipients.



!!! Exchange Server 2013, Exchange Server 2016, Exchange Online

The ShowGalAsDefaultView parameter shows the global address list (GAL) as the default recipient picker for messages. Valid input for this parameter is $true or $false. The default value is $true.



```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
The WhatIf switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ImapForceICalForCalendarRetrievalOption
!!! Exchange Server 2013

The ImapForceICalForCalendarRetrievalOption parameter specifies how meeting requests are presented to IMAP4 clients that access the mailbox.

Valid values for this parameter are:

- $true All meeting requests are in the iCal format.

- $false All meeting requests appear as Outlook Web App links.

The default value is $false.

To change the value of this parameter, you also need to set the value of the ImapUseProtocolDefaults parameter to $false.



!!! Exchange Server 2016, Exchange Online

The ImapForceICalForCalendarRetrievalOption parameter specifies how meeting requests are presented to IMAP4 clients that access the mailbox.

Valid values for this parameter are:

- $true: All meeting requests are in the iCal format.

- $false: All meeting requests appear as Outlook on the web links.

The default value is $false.

To change the value of this parameter, you also need to set the value of the ImapUseProtocolDefaults parameter to $false.



```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MAPIBlockOutlookExternalConnectivity
!!! Exchange Server 2013

This parameter is available only in on-premises Exchange.

The MAPIBlockOutlookExternalConnectivity parameter enables or disables external access to the mailbox in Outlook by removing the external URLs from the Autodiscover response. This setting affects Outlook Anywhere, MAPI over HTTP, and Exchange Web Services (EWS). Valid values are:

- $true External Outlook clients can't use Outlook Anywhere, MAPI over HTTP, or EWS to access the mailbox.

- $false External Outlook clients can use Outlook Anywhere, MAPI over HTTP, or EWS to access the mailbox.

Note: If your organization uses the same Autodiscover URL values for internal and external clients, setting this parameter to $true won't block access for external clients.



!!! Exchange Server 2016, Exchange Online

This parameter is available only in on-premises Exchange.

The MAPIBlockOutlookExternalConnectivity parameter enables or disables external access to the mailbox in Outlook by removing the external URLs from the Autodiscover response. This setting affects Outlook Anywhere, MAPI over HTTP, and Exchange Web Services (EWS). Valid values are:

- $true: External Outlook clients can't use Outlook Anywhere, MAPI over HTTP, or EWS to access the mailbox.

- $false: External Outlook clients can use Outlook Anywhere, MAPI over HTTP, or EWS to access the mailbox.

Note: If your organization uses the same Autodiscover URL values for internal and external clients, setting this parameter to $true won't block access for external clients.



```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MapiHttpEnabled
!!! Exchange Server 2013

This parameter is available only in on-premises Exchange.

The MapiHttpEnabled parameter enables or disables access to the mailbox in Outlook by using MAPI over HTTP. Valid values are:

- $true Access to the mailbox by using MAPI over HTTP is enabled.

- $false Access to the mailbox by using MAPI over HTTP is disabled.

- $null (blank) The setting isn't configured. The mailbox uses the organization setting for MAPI over HTTP (the MapiHttpEnabled parameter on the Set-OrganizationConfig cmdlet). This is the default value.



!!! Exchange Server 2016, Exchange Online

This parameter is available only in on-premises Exchange.

The MapiHttpEnabled parameter enables or disables access to the mailbox in Outlook by using MAPI over HTTP. Valid values are:

- $true: Access to the mailbox by using MAPI over HTTP is enabled.

- $false: Access to the mailbox by using MAPI over HTTP is disabled.

- $null (blank): The setting isn't configured. The mailbox uses the organization setting for MAPI over HTTP (the MapiHttpEnabled parameter on the Set-OrganizationConfig cmdlet). This is the default value.



```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OWAforDevicesEnabled
!!! Exchange Server 2013

The OWAforDevicesEnabled parameter enables or disables access to the mailbox by using OWA for Devices.

Valid input for this parameter is $true or $false. The default value is $true.



!!! Exchange Server 2016, Exchange Online

The OWAforDevicesEnabled parameter enables or disables access to the mailbox by using Outlook on the web for devices.

Valid input for this parameter is $true or $false. The default value is $true.



```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PopForceICalForCalendarRetrievalOption
!!! Exchange Server 2013

The PopForceICalForCalendarRetrievalOption parameter specifies how meeting requests are presented to POP3 clients that access the mailbox.

Valid values for this parameter are:

- $true All meeting requests are in the iCal format.

- $false All meeting requests appear as Outlook Web App links.

The default value is $false.

To change the value of this parameter, you also need to set the value of the PopUseProtocolDefaults parameter to $false.



!!! Exchange Server 2016, Exchange Online

The PopForceICalForCalendarRetrievalOption parameter specifies how meeting requests are presented to POP3 clients that access the mailbox.

Valid values for this parameter are:

- $true: All meeting requests are in the iCal format.

- $false: All meeting requests appear as Outlook on the web links.

The default value is $false.

To change the value of this parameter, you also need to set the value of the PopUseProtocolDefaults parameter to $false.



```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ResetAutoBlockedDevices
!!! Exchange Server 2013

This parameter is available only in on-premises Exchange.

The ResetAutoBlockedDevices switch resets the status of blocked mobile devices that have exceeded the limits defined by the Set-ActiveSyncDeviceAutoblockThreshold cmdlet.



!!! Exchange Server 2016, Exchange Online

This parameter is available only in on-premises Exchange.

The ResetAutoBlockedDevices switch resets the status of blocked mobile devices that have exceeded the limits defined by the Set-ActiveSyncDeviceAutoblockThreshold cmdlet. You don't need to specify a value with this switch.



```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ActiveSyncSuppressReadReceipt
The ActiveSyncSuppressReadReceipt parameter controls the behavior of read receipts for Exchange ActiveSync clients that access the mailbox. Valid values are:

- $true: The user receives a read receipt when the recipient opens the message.

- $false: The user receives two read receipts: one when the message is downloaded and another when the message is opened. This is the default value.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IsOptimizedForAccessibility
The IsOptimizedForAccessibility parameter specifies whether the mailbox is configured to use the light version of Outlook on the web. Valid values are:

- $true: The mailbox is configured to use the light version of Outlook on the web.

- $false: The mailbox isn't configured to use the light version of Outlook on the web.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UniversalOutlookEnabled
This parameter is available only in the cloud-based service.

The UniversalOutlookEnabled parameter enables or disables access to the mailbox by using Mail and Calendar. Valid values are:

- $true: Access to the mailbox in Mail and Calendar is enabled. This is the default value.

- $false: Access to the mailbox in Mail and Calendar is disabled.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

###  
To see the input types that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

###  
To see the return types, which are also known as output types, that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS

[Online Version](https://technet.microsoft.com/library/ff7d4dc5-755e-4005-a0a3-631eed3f9b3b.aspx)


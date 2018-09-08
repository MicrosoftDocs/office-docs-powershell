---
external help file: Microsoft.Exchange.RolesAndAccess-Help.xml
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
title: Enable-MailContact
schema: 2.0.0
monikerRange: "exchserver-ps-2010 || exchserver-ps-2013 || exchserver-ps-2016"
---

# Enable-MailContact

## SYNOPSIS
This cmdlet is available only in on-premises Exchange.

Use the Enable-MailContact cmdlet to add email capabilities to existing contacts that aren't already mail-enabled.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
Enable-MailContact [-Identity] <ContactIdParameter> -ExternalEmailAddress <ProxyAddress> [-Alias <String>]
 [-Confirm] [-DisplayName <String>] [-DomainController <Fqdn>]
 [-MacAttachmentFormat <BinHex | UuEncode | AppleSingle | AppleDouble>]
 [-MessageBodyFormat <Text | Html | TextAndHtml>] [-MessageFormat <Text | Mime>]
 [-PrimarySmtpAddress <SmtpAddress>] [-UsePreferMessageFormat <$true | $false>] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
The Enable-MailContact cmdlet mail-enables existing contacts by adding the email attributes that are required by Exchange. Mail contacts are visible to the other MailContact cmdlets.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Enable-MailContact -Identity Roland -ExternalEmailAddress "roland@tailspintoys.com"
```

This example mail-enables an existing contact that isn't mail-enabled.

## PARAMETERS

### -ExternalEmailAddress
The ExternalEmailAddress parameter specifies the target email address of the mail contact or mail user. By default, this value is used as the primary email address of the mail contact or mail user.

In on-premises environments, you can use the PrimarySMTPAddress parameter to set the primary email address to a different value. However, we recommend this only in cross-forest environments.

```yaml
Type: ProxyAddress
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
The Identity parameter specifies the non-mail-enabled contact that you want to mail-enable. You can use any value that uniquely identifies the contact.

For example:

- Name

- Display name

- Distinguished name (DN)

- Canonical DN

- GUID

```yaml
Type: ContactIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -Alias
The Alias parameter specifies the Exchange alias (also known as the mail nickname) for the recipient. This value identifies the recipient as a mail-enabled object, and shouldn't be confused with multiple email addresses for the same recipient (also known as proxy addresses). A recipient can have only one Alias value.

The value of Alias can contain letters, numbers and the characters !, #, $, %, &, ', *, +, -, /, =, ?, ^, _, `, {, |, } and ~. Periods (.) are allowed, but each period must be surrounded by other valid characters (for example, help.desk). Unicode characters from U+00A1 to U+00FF are also allowed. The maximum length of the Alias value is 64 characters.

When you create a recipient without specifying an email address, the Alias value you specify is used to generate the primary email address (`<alias>@<domain>`). Supported Unicode characters are mapped to best-fit US-ASCII text characters. For example, U+00F6 (ö) is changed to oe in the primary email address.

If you don't use the Alias parameter when you create a recipient, the value of a different required parameter is used for the Alias property value:

- Recipients with user accounts (for example, user mailboxes, and mail users): The left side of the MicrosoftOnlineServicesID or UserPrincipalName parameter is used. For example, helpdesk@contoso.com results in the Alias property value helpdesk.

- Recipeints without user accounts (for example, room mailboxes, mail contacts and distribution groups): The value of the Name parameter is used. Spaces are removed and unsupported characters are converted to question marks (?).

If you modify the Alias value of an existing recipient, the primary email address is automatically updated only in environments where the recipient is subject to email address policies (the EmailAddressPolicyEnabled property is True for the recipient).

The Alias parameter never generates or updates the primary email address of a mail contact or a mail user.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
The Confirm switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding.

- Destructive cmdlets (for example, Remove cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: -Confirm:$false.

- Most other cmdlets (for example, New and Set cmdlets) don't have a built-in pause. For these cmdlets, specifying the Confirm switch without a value introduces a pause that forces you acknowledge the command before proceeding.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DisplayName
The DisplayName parameter specifies the display name of the mail contact. The display name is visible in the Exchange admin center and in address lists. The maximum length is 256 characters. If the value contains spaces, enclose the value in quotation marks (").

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController
The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MacAttachmentFormat
The MacAttachmentFormat parameter specifies the Apple Macintosh operating system attachment format to use for messages sent to the mail contact or mail user. Valid values are:

- BinHex (This is the default value)

- UuEncode

- AppleSingle

- AppleDouble

The MacAttachmentFormat and MessageFormat parameters are interdependent:

- MessageFormat is Text: MacAttachmentFormat can be BinHex or UuEncode.

- MessageFormat is Mime: MacAttachmentFormat can be BinHex, AppleSingle, or AppleDouble.

```yaml
Type: BinHex | UuEncode | AppleSingle | AppleDouble
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MessageBodyFormat
The MessageBodyFormat parameter specifies the message body format for messages sent to the mail contact or mail user. Valid values are:

- Text

- Html

- TextAndHtml (This is the default value)

The MessageFormat and MessageBodyFormat parameters are interdependent:

- MessageFormat is Mime: MessageBodyFormat can be Text, Html or TextAndHtml.

- MessageFormat is Text: MessageBodyFormat can only be Text.

```yaml
Type: Text | Html | TextAndHtml
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MessageFormat
The MessageFormat parameter specifies the message format for messages sent to the mail contact or mail user. Valid values are:

- Text

- Mime (This is the default value)

The MessageFormat and MessageBodyFormat parameters are interdependent:

- MessageFormat is Mime: MessageBodyFormat can be Text, Html or TextAndHtml.

- MessageFormat is Text: MessageBodyFormat can only be Text.

Therefore, if you want to change the MessageFormat parameter from Mime to Text, you must also change the MessageBodyFormat parameter to Text.

```yaml
Type: Text | Mime
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PrimarySmtpAddress
The PrimarySmtpAddress parameter specifies the primary return email address that's used for the recipient. If it's available on this cmdlet, you can't use the EmailAddresses and PrimarySmtpAddress parameters in the same command.

By default, the primary address is the same as the ExternalEmailAddress parameter value.

If you use the PrimarySmtpAddress parameter to specify the primary email address, the command sets the EmailAddressPolicyEnabled property of the mail contact to False, which means the email addresses of the mail contact aren't automatically updated by email address policies. We recommend that you don't set the primary email address to a value other than the ExternalEmailAddress unless you're in a cross-forest scenario.

```yaml
Type: SmtpAddress
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UsePreferMessageFormat
The UsePreferMessageFormat specifies whether the message format settings configured for the mail user or mail contact override the global settings configured for the remote domain or configured by the message sender. Valid value are:

- $true: Messages sent to the mail user or mail contact use the message format that's configured for the mail user or mail contact.

- $false: Messages sent to the mail user or mail contact use the message format that's configured for the remote domain (the default remote domain or a specific remote domain) or configured by the message sender. This is the default value.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
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
Aliases: wi
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
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

[Online Version](https://technet.microsoft.com/library/0accff85-3a03-4068-81e2-0508a4df21ec.aspx)

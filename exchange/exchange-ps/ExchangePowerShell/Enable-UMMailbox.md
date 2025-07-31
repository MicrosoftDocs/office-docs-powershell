---
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
author: chrisda
external help file: Microsoft.Exchange.MediaAndDevices-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchange/enable-ummailbox
schema: 2.0.0
title: Enable-UMMailbox
---

# Enable-UMMailbox

## SYNOPSIS
This cmdlet is available only in on-premises Exchange.

Use the Enable-UMMailbox cmdlet to enable Unified Messaging (UM) for existing mailbox users.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

### Identity (Default)
```
Enable-UMMailbox [-Identity] <MailboxIdParameter> -UMMailboxPolicy <MailboxPolicyIdParameter>
 [-AutomaticSpeechRecognitionEnabled <Boolean>]
 [-Confirm]
 [-DomainController <Fqdn>]
 [-Extensions <MultiValuedProperty>]
 [-IgnoreDefaultScope]
 [-NotifyEmail <String>]
 [-PilotNumber <String>]
 [-PIN <String>]
 [-PINExpired <Boolean>]
 [-SIPResourceIdentifier <String>]
 [-ValidateOnly]
 [-WhatIf]
 [<CommonParameters>]
```

### CloudVoiceMail
```
Enable-UMMailbox [-Identity] <MailboxIdParameter>
 [-EnableCloudVoiceMail]
 [-AutomaticSpeechRecognitionEnabled <Boolean>]
 [-Confirm]
 [-DomainController <Fqdn>]
 [-Extensions <MultiValuedProperty>]
 [-IgnoreDefaultScope]
 [-NotifyEmail <String>]
 [-PilotNumber <String>]
 [-Pin <String>]
 [-PinExpired <Boolean>]
 [-SendWelcomeMail <Boolean>]
 [-SIPResourceIdentifier <String>]
 [-UMMailboxPolicy <MailboxPolicyIdParameter>]
 [-ValidateOnly]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
When the mailbox is enabled for Unified Messaging, the settings from a UM mailbox policy are applied to the mailbox. After the mailbox is enabled for Unified Messaging, the user can use the UM features that are included in Microsoft Exchange.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Enable-UMMailbox -Identity tonysmith@contoso.com -UMMailboxPolicy MyUMMailboxPolicy -Extensions 51234 -PIN 5643892 -NotifyEmail administrator@contoso.com -PINExpired $true
```

This example enables Unified Messaging on the mailbox for tonysmith@contoso.com, sets the extension and PIN for the user that must be changed when the user logs on to Outlook Voice Access, assigns the UM mailbox policy MyUMMailboxPolicy to the user's mailbox, and then sends an email message that contains the Unified Messaging welcome information to administrator@contoso.com.

### Example 2
```powershell
Enable-UMMailbox -Identity tonysmith@contoso.com -UMMailboxPolicy MyUMMailboxPolicy -Extensions 51234 -PIN 5643892 -SIPResourceIdentifier "tonysmith@contoso.com" -PINExpired $true
```

This example enables Unified Messaging on a SIP-enabled mailbox for tonysmith@contoso.com, associates the UM mailbox policy MyUMMailboxPolicy, and sets the extension number, SIP resource identifier, and PIN for the user that must be changed when the user logs on to Outlook Voice Access, and then sends an email message that contains the Unified Messaging welcome information to tonysmith@contoso.com.

## PARAMETERS

### -Identity

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

The Identity parameter specifies the mailbox that you want to enable for Unified Messaging. You can use any value that uniquely identifies the mailbox. For example:

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

### -UMMailboxPolicy

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

The UMMailboxPolicy parameter specifies the UM mailbox policy that you want to associate with the mailbox. You can use any value that uniquely identifies the policy. For example:

- Name
- Distinguished name (DN)
- GUID

```yaml
Type: MailboxPolicyIdParameter
Parameter Sets: Identity, CloudVoiceMail
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AutomaticSpeechRecognitionEnabled

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

The AutomaticSpeechRecognitionEnabled parameter specifies whether to enable Automatic Speech Recognition (ASR) for the UM mailbox. Valid values are:

- $true: ASR is enabled for the mailbox. This is the default value. ASR is available only if the user's specified preferred language is installed.
- $false: ASR is disabled for the mailbox.

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

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

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

### -DomainController

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

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

### -EnableCloudVoiceMail

> Applicable: Exchange Server 2016

The EnableCloudVoiceMail switch specifies whether to enable the mailbox for UM in Skype for Business Online. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: CloudVoiceMail
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Extensions

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

The Extensions parameter specifies the extension number for the user. Either a single extension number or an array of telephone number extensions can be specified. The user's extension must be unique to the UM dial plan.

If you don't use this parameter, the command attempts to use a default telephone number value for the user. If you're using a Session Initiation Protocol (SIP) Uniform Resource Identifier (URI) or E.164 dial plan, you also need to use the SIPResourceIdentifier parameter.

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

### -IgnoreDefaultScope

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

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

### -NotifyEmail

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

The NotifyEmail parameter specifies the email address where the Unified Messaging welcome message is sent. By default, the message is sent to the user's SMTP email address.

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

### -PilotNumber

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

The PilotNumber parameter specifies the subscriber access number users can dial to gain access to their mailboxes. The default value is the subscriber access number that's specified on the UM dial plan.

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

### -PIN

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

The PIN parameter specifies the value for the initial PIN that's used for the UM mailbox. The PIN is checked against the UM mailbox policy rules. The PIN value must be from 4 through 24 numeric characters.

If you don't use this parameter, a system-generated PIN is sent to the user. By default, the PIN generated by the system contains six numeric characters.

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

### -PINExpired

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

The PINExpired parameter specifies whether the PIN is treated as expired. If the PIN isn't supplied, the PIN is treated as expired and users are prompted to reset their PIN the next time they log on.

- $true: The user is required to reset their PIN the next time they log on.
- $false: The user isn't required to reset their PIN the next time they log on.

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

### -SendWelcomeMail

> Applicable: Exchange Server 2016

The SendWelcomeMail parameter specifies whether you want to send a welcome message after the mailbox has been enabled for UM. Valid values are:

- $true: Send the welcome to UM message.
- $false: Don't send the welcome to UM message.

```yaml
Type: Boolean
Parameter Sets: CloudVoiceMail
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SIPResourceIdentifier

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

The SIPResourceIdentifier parameter specifies the SIP address or E.164 address for the user. This property is compared to the URI type defined on the UM dial plan.

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

### -ValidateOnly

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

The ValidateOnly switch tells the cmdlet to evaluate the conditions and requirements necessary to perform the operation and then reports whether the operation will succeed or fail. You don't need to specify a value with this switch.

No changes are made when the ValidateOnly switch is used.

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

### -WhatIf

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

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

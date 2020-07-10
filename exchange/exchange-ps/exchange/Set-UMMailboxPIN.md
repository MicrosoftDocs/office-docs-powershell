---
external help file: Microsoft.Exchange.MediaAndDevices-Help.xml
online version: https://docs.microsoft.com/powershell/module/exchange/set-ummailboxpin
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online
title: Set-UMMailboxPIN
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
monikerRange: "exchserver-ps-2010 || exchserver-ps-2013 || exchserver-ps-2016 || exchserver-ps-2019 || exchonline-ps"
---

# Set-UMMailboxPIN

## SYNOPSIS
This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the Set-UMMailboxPIN cmdlet to reset the PIN for a Unified Messaging (UM)-enabled mailbox.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://docs.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Set-UMMailboxPIN [-Identity] <MailboxIdParameter> [-Confirm] [-DomainController <Fqdn>] [-IgnoreDefaultScope]
 [-LockedOut <Boolean>] [-NotifyEmail <String>] [-Pin <String>] [-PINExpired <Boolean>]
 [-SendEmail <Boolean>] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
The Set-UMMailboxPIN cmdlet is used when a UM-enabled user has been locked out of a mailbox because either the user tried to log on by using an incorrect PIN multiple times or because the user has forgotten the PIN. You can use this cmdlet to set the user's PIN. The new PIN must comply with the PIN policy rules specified in the user's mailbox policy. The new PIN is sent to the user in an email message, or sent to an alternative email address. You can control whether the user must reset the PIN at logon and if the mailbox will continue to be locked.

After this task is completed, the PIN on a UM-enabled mailbox is set.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://docs.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Set-UMMailboxPIN -Identity tonysmith@contoso.com
```

This example resets the PIN on the UM-enabled mailbox for tonysmith@contoso.com.

### Example 2
```powershell
Set-UMMailboxPIN -Identity tonysmith@contoso.com -PIN 1985848 -PinExpired $true
```

This example resets the initial PIN to 1985848 on the UM-enabled mailbox for tonysmith@contoso.com, and then sets the PIN as expired so that the user will be asked to change the PIN the next time the user logs on.

### Example 3
```powershell
Set-UMMailboxPIN -Identity tonysmith@contoso.com -LockedOut $true
```

This example locks the UM-enabled mailbox for tonysmith@contoso.com to prevent the user from accessing the mailbox.

### Example 4
```powershell
Set-UMMailboxPIN -Identity tonysmith@contoso.com -LockedOut $false
```

This example unlocks the UM-enabled mailbox for tonysmith@contoso.com and allows the user access to the mailbox.

## PARAMETERS

### -Identity
The Identity parameter specifies the mailbox that you want to modify. You can use any value that uniquely identifies the mailbox. For example:

- Name

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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -Confirm
The Confirm switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding.

- Destructive cmdlets (for example, Remove-\* cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: -Confirm:$false.

- Most other cmdlets (for example, New-\* and Set-\* cmdlets) don't have a built-in pause. For these cmdlets, specifying the Confirm switch without a value introduces a pause that forces you acknowledge the command before proceeding.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController
This parameter is available only in on-premises Exchange.

The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IgnoreDefaultScope
This parameter is available only in on-premises Exchange.

The IgnoreDefaultScope switch tells the command to ignore the default recipient scope setting for the Exchange Management Shell session, and to use the entire forest as the scope. This allows the command to access Active Directory objects that aren't currently available in the default scope.

Using the IgnoreDefaultScope switch introduces the following restrictions:

- You can't use the DomainController parameter. The command uses an appropriate global catalog server automatically.

- You can only use the DN for the Identity parameter. Other forms of identification, such as alias or GUID, aren't accepted.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LockedOut
The LockedOut parameter specifies whether the mailbox will continue to be locked. If set to $true, the mailbox is marked as locked out. By default, if this parameter is omitted or set to $false, the command clears the locked-out status on the mailbox.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -NotifyEmail
The NotifyEmail parameter specifies the email address to which the server sends the email message that contains the PIN reset information. By default, the message is sent to the SMTP address of the enabled user.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Pin
The Pin parameter specifies a new PIN for use with the mailbox. The PIN is checked against the PIN rules defined in the Unified Messaging mailbox policy. If the PIN isn't supplied, the command generates a new PIN for the mailbox and includes it in an email message sent to the user.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PINExpired
The PINExpired parameter specifies whether the PIN is treated as expired. If this parameter is supplied and is set to $false, the user isn't required to reset the PIN the next time that the user logs on. If the PIN isn't supplied, the PIN is treated as expired and the user is prompted to reset the PIN the next time that the user logs on.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SendEmail
The SendEmail parameter specifies whether to send a PIN to the user in an email message. The default is $true.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PINExpired
The PINExpired parameter specifies whether the PIN is treated as expired. If this parameter is supplied and is set to $false, the user isn't required to reset the PIN the next time that the user logs on. If the PIN isn't supplied, the PIN is treated as expired and the user is prompted to reset the PIN the next time that the user logs on.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

###  
To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

###  
To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS

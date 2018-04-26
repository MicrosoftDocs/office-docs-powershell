---
external help file: Microsoft.Exchange.RemoteConnections-Help.xml
applicable: Exchange Online
title: Set-PopSubscription
schema: 2.0.0
monikerRange: "exchonline-ps"
---

# Set-PopSubscription

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the Set-PopSubscription cmdlet to modify the properties of an existing POP subscription that's configured in a user's cloud-based mailbox.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

### Set2
```
Set-PopSubscription [-Identity] <AggregationSubscriptionIdParameter> [-Confirm] [-DisplayName <String>]
 [-EmailAddress <SmtpAddress>] [-Enabled <$true | $false>] [-Force] [-IncomingAuth <Basic | Spa>]
 [-IncomingPassword <SecureString>] [-IncomingPort <Int32>] [-IncomingSecurity <None | Ssl | Tls>]
 [-IncomingServer <Fqdn>] [-IncomingUserName <String>] [-LeaveOnServer <$true | $false>]
 [-Mailbox <MailboxIdParameter>] [-WhatIf] [<CommonParameters>]
```

### Set4
```
Set-PopSubscription [-Identity] <AggregationSubscriptionIdParameter> [-Confirm] [-Mailbox <MailboxIdParameter>]
 [-ResendVerification] [-WhatIf] [<CommonParameters>]
```

### Set3
```
Set-PopSubscription [-Identity] <AggregationSubscriptionIdParameter> [-Confirm] [-Mailbox <MailboxIdParameter>]
 [-ValidateSecret <String>] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
You can set properties for the POP subscription, such as the POP server, TCP port number, encryption method, and authentication method.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Set-PopSubscription "Ayla Contoso" -Mailbox "Ayla Kol" -LeaveOnServer $false
```

This example modifies the value of the LeaveOnServer parameter for the POP subscription Ayla Contoso that's configured in the cloud-based mailbox of the user Ayla Kol.

## PARAMETERS

### -Identity
The Identity parameter specifies the POP subscription. You can identify the subscription by using one of the following methods:

- Specify the globally unique identifier of the subscription, which is its canonical name (CN).

- Use the Mailbox parameter to specify the mailbox that contains the subscription, and then specify the name of the subscription.

You can find the identifying values for a POP subscription, such as Identity and Name, by running this command: Get-PopSubscription -Mailbox \<mailbox\>.

```yaml
Type: AggregationSubscriptionIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online
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
Applicable: Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DisplayName
The DisplayName parameter specifies the friendly name of the subscription.

```yaml
Type: String
Parameter Sets: Set2
Aliases:
Applicable: Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EmailAddress
The EmailAddress parameter specifies the email address of the POP mailbox.

```yaml
Type: SmtpAddress
Parameter Sets: Set2
Aliases:
Applicable: Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Enabled
The Enabled parameter specifies whether the POP subscription is enabled. This parameter accepts $true or $false values. The default value is $true.

```yaml
Type: $true | $false
Parameter Sets: Set2
Aliases:
Applicable: Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
The Force parameter instructs the command to modify the specified subscription settings even if those settings can't be verified by the remote POP server.

```yaml
Type: SwitchParameter
Parameter Sets: Set2
Aliases:
Applicable: Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IncomingAuth
The IncomingAuth parameter sets the authentication method used by POP clients to access the POP server. Valid values are Basic or Spa, which is secure password authentication. If you don't specify a value for the IncomingAuth parameter, the value Basic is used.

```yaml
Type: Basic | Spa
Parameter Sets: Set2
Aliases:
Applicable: Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IncomingPassword
The IncomingPassword parameter specifies the password used to sign in to the POP mailbox. You must specify the value for this parameter in a secure format, for example, (ConvertTo-SecureString -String '\<password\>' -AsPlainText -Force).

```yaml
Type: SecureString
Parameter Sets: Set2
Aliases:
Applicable: Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IncomingPort
The Incoming Port parameter specifies the TCP port number used by POP clients to connect to the POP server. Typical values are 110 for unencrypted connections and 995 for encrypted connections. By default, the value of the IncomingPort parameter is set to 110 if you don't set the IncomingSecurity parameter to Ssl or Tls. If you set the IncomingSecurity parameter to Ssl or Tls, the value of the IncomingPort parameter is set to 995. You can override the default values by specifying an integer for the IncomingPort parameter.

```yaml
Type: Int32
Parameter Sets: Set2
Aliases:
Applicable: Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IncomingSecurity
The IncomingSecurity parameter specifies the encryption method used by POP clients to connect to the POP server. Valid values are None, Ssl, or Tls. If you don't specify a value for the IncomingSecurity parameter, the value None is used.

```yaml
Type: None | Ssl | Tls
Parameter Sets: Set2
Aliases:
Applicable: Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IncomingServer
The IncomingServer parameter specifies the fully qualified domain name (FQDN) of the POP server, for example, incoming.contoso.com.

```yaml
Type: Fqdn
Parameter Sets: Set2
Aliases:
Applicable: Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IncomingUserName
The IncomingUserName parameter specifies the user name used to sign in to the POP mailbox.

```yaml
Type: String
Parameter Sets: Set2
Aliases:
Applicable: Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LeaveOnServer
The LeaveOnServer parameter configures the behavior of retrieved messages in the POP mailbox. When the LeaveOnServer parameter is set to the value $true, the retrieved messages are left in the POP mailbox. When it's set to the value $false, retrieved messages are removed from the POP mailbox. The default value is $true.

```yaml
Type: $true | $false
Parameter Sets: Set2
Aliases:
Applicable: Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Mailbox
The Mailbox parameter specifies the cloud-based mailbox that contains the POP subscription. You can use any value that uniquely identifies the mailbox.

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
Applicable: Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -ResendVerification
The ResendVerification parameter generates verification data for the POP subscription. This is part of the verification process that allows the user to send messages from their cloud-based mailbox using the From address of the subscribed POP mailbox.

The ResendVerification parameter can't be specified with any other parameters that modify the settings of the subscription. Also, the ResendVerification and ValidateSecret parameters are mutually exclusive.

```yaml
Type: SwitchParameter
Parameter Sets: Set4
Aliases:
Applicable: Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ValidateSecret
The ValidateSecret parameter validates verification data for the POP subscription. This is part of the verification process that allows the user to send messages from their cloud-based mailbox using the From address of the subscribed POP mailbox.

The ValidateSecret parameter can't be specified with any other parameters that modify the settings of the subscription. Also, the ResendVerification and ValidateSecret parameters are mutually exclusive.

```yaml
Type: String
Parameter Sets: Set3
Aliases:
Applicable: Exchange Online
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
Applicable: Exchange Online
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
To see the input types that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

###  
To see the return types, which are also known as output types, that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS

[Online Version](https://technet.microsoft.com/library/3ec02987-7404-47fa-a6b0-43239344b6c8.aspx)

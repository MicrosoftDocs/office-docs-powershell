---
external help file: Microsoft.Exchange.WebClient-Help.xml
applicable: Exchange Online
title: Get-OMEMessageStatus
schema: 2.0.0
monikerRange: "exchonline-ps"
---

# Get-OMEMessageStatus

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the Get-OMEMessageStatus cmdlet to view the Microsoft Office 365 Message Encryption (OME) revocation status for a specific message.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
Get-OMEMessageStatus -MessageId <String> [<CommonParameters>]
```

## DESCRIPTION
If encryption for the message was successfully revoked, the command will return the message: The encrypted email with the subject "\<subject\>" and Message ID "\<messageId>\" was successfully revoked.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### Example 1
```
Get-OMEMessageStatus -MessageId "<d9683b4c-127b-413a-ae2e-fa7dfb32c69d@DM3NAM06BG401.Eop-nam06.prod.protection.outlook.com>"
```

This example returns the encryption revocation status for the specified message.

## PARAMETERS

### -MessageId
The MessageId parameter specifies the message based on the value the Message-ID header field. This value is also known as the Client ID. The format of the Message-ID depends on the messaging server that sent the message. The value should be unique for each message. However, not all messaging servers create values for the Message-ID in the same way. Be sure to include the full Message ID string (which may include angle brackets) and enclose the value in quotation marks (for example, "<d9683b4c-127b-413a-ae2e-fa7dfb32c69d@DM3NAM06BG401.Eop-nam06.prod.protection.outlook.com>").

You can find the Message ID for a message in Message Trace or the Message Encryption Report in the Office 365 Security & Compliance Center.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online
Required: True
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

[Online Version](https://docs.microsoft.com/powershell/module/exchange/encryption-and-certificates/get-omemessagestatus)

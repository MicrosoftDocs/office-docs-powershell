---
external help file: Microsoft.Exchange.RemoteConnections-Help.xml
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
title: Test-ArchiveConnectivity
schema: 2.0.0
---

# Test-ArchiveConnectivity

## SYNOPSIS
This cmdlet is available only in on-premises Exchange.

Use the Test-ArchiveConnectivity cmdlet to verify archive functionality for a mailbox user.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
Test-ArchiveConnectivity [-UserSmtp] <SmtpAddress> [-Confirm] [-WhatIf] [-IncludeArchiveMRMConfiguration]
 [-MessageId <String>] [<CommonParameters>]
```

## DESCRIPTION
Running the Test-ArchiveConnectivity cmdlet validates connectivity to a user's archive mailbox. End-to-end verification includes testing whether an on-premises or cloud-based archive is provisioned for the on-premises mailbox user and whether it's enabled and logging on to the archive mailbox on behalf of the user. Successful completion of the command indicates that processes such as the Managed Folder Assistant and Outlook on the web are able to successfully access the archive mailbox.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### Example 1
```
Test-ArchiveConnectivity -UserSmtp gsingh@contoso.com
```

This example tests archive connectivity to Gurinder Singh's archive.

### Example 2
```
Get-Mailbox -Filter {ArchiveGuid -ne $null -and ArchiveDomain -ne $null} -ResultSize Unlimited | Test-ArchiveConnectivity
```

This command retrieves mailboxes that have a cloud-based archive provisioned and tests archive connectivity for each mailbox.

## PARAMETERS

### -UserSmtp
The UserSmtp parameter specifies the SMTP address of the mailbox.

```yaml
Type: SmtpAddress
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

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

### -IncludeArchiveMRMConfiguration
The IncludeArchiveMRMConfiguration switch retrieves retention tags that are provisioned in the user's archive mailbox and the last time the archive was processed by the Managed Folder Assistant. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MessageId
This parameter is reserved for internal Microsoft use.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016

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

[Online Version](https://technet.microsoft.com/library/0db98a12-8cbb-4e9a-add4-c1847b057a44.aspx)

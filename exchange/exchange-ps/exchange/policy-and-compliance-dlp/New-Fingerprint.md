---
external help file: Microsoft.Exchange.RemoteConnections-Help.xml
applicable: Exchange Server 2013, Exchange Server 2016
title: New-Fingerprint
schema: 2.0.0
monikerRange: "exchserver-ps-2013 || exchserver-ps-2016"
---

# New-Fingerprint

## SYNOPSIS
This cmdlet is available only in on-premises Exchange.

**Note**: In Exchange Online, this cmdlet has been replaced by the [New-DlpFingerPrint](https://docs.microsoft.com/powershell/module/exchange/policy-and-compliance-dlp/new-dlpfingerprint) cmdlet in Office 365 Security & Compliance Center PowerShell.

Use the New-Fingerprint cmdlet to create document fingerprints that are used with data classification rules. Because the results of New-Fingerprint are not stored outside of the data classification rule, you always run New-Fingerprint and New-DataClassification or Set-Dataclassification in the same PowerShell session.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
New-Fingerprint [[-FileData] <Byte[]>] -Description <String> [-Confirm] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
Classification rule packages are used by data loss prevention (DLP) to detect sensitive content in messages.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
$Patent_Template = Get-Content "C:\My Documents\Contoso Patent Template.docx" -Encoding byte; $Patent_Fingerprint = New-Fingerprint -FileData $Patent_Template -Description "Contoso Patent Template"
```

This example creates a new document fingerprint based on the file C:\My Documents\Contoso Patent Template.docx. You store the new fingerprint as a variable so you can use it with the New-DataClassification cmdlet in the same PowerShell session.

## PARAMETERS

### -Description
The Description parameter specifies a description for the document fingerprint.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016
Required: True
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
Applicable: Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -FileData
The FileData parameter specifies the file to use as a document fingerprint.

You need to read the file to a byte-encoded object using the Get-Content cmdlet. For details, see the section.

```yaml
Type: Byte[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016
Required: False
Position: 1
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
To see the input types that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

###  
To see the return types, which are also known as output types, that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS

[Online Version](https://technet.microsoft.com/library/b579682a-9922-4db0-b524-bcea0d2cef9b.aspx)

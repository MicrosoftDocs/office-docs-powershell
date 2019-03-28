---
external help file: Microsoft.Exchange.ServerStatus-Help.xml
applicable: Exchange Online, Exchange Online Protection
title: Export-QuarantineMessage
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
monikerRange: "exchonline-ps || eop-ps"
---

# Export-QuarantineMessage

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the Export-QuarantineMessage cmdlet to export quarantined messages and files from your cloud-based organization. Messages are exported to .eml message files so you can open them in Outlook.

For files that are protected by Office 365 Advanced Threat Protection in SharePoint Online, OneDrive for Business and Microsoft Teams, the files are exported in Base64 format.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
Export-QuarantineMessage -Identity <QuarantineMessageIdentity> [<CommonParameters>]
```

## DESCRIPTION
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
$e = Export-QuarantineMessage -Identity c14401cf-aa9a-465b-cfd5-08d0f0ca37c5\4c2ca98e-94ea-db3a-7eb8-3b63657d4db7; $e.BodyEncoding; $e | select -ExpandProperty Eml | Out-File "C:\My Documents\Export1_ascii.eml" -Encoding ascii
```

This example exports the quarantined message with the specified Identity value.

The first two commands determine the message encoding (the value of the BodyEncoding property in the output; for example, ascii).

The third command exports the message to the specified file using the message encoding that you found in the previous commands.

Notes:

- The "| select -ExpandProperty Eml" part of the command specifies the whole message, including attachments.

- You need to use the Out-File cmdlet to write the .eml message file with the required encoding. If you use the default PowerShell redirection operator ">" to write the output file, the default encoding is Unicode, which might not match the actual message encoding.

### -------------------------- Example 2 --------------------------
```
$e = Export-QuarantineMessage -Identity 9c6bb3e8-db9e-4823-9759-08d594179bd3\7fec89fe-41b0-ae67-4887-5bede017d111; $bytes = [Convert]::FromBase64String($e.eml); [IO.File]::WriteAllBytes("C:\My Documents\Export1.txt", $bytes)
```

This example exports the quarantined file with the specified Identity value. The first command exports the file to a Base 64 string. The next two commands convert the string to byte format and write it to the output file.

## PARAMETERS

### -Identity
The Identity parameter specifies the quarantined message that you want to export. The value is a unique quarantined message identifier in the format GUID1\GUID2 (for example c14401cf-aa9a-465b-cfd5-08d0f0ca37c5\4c2ca98e-94ea-db3a-7eb8-3b63657d4db7).

You can find the Identity value for a quarantined message by using the Get-QuarantineMessage cmdlet.

```yaml
Type: QuarantineMessageIdentity
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection
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

## OUTPUTS

###  

## NOTES

## RELATED LINKS

[Online Version](https://technet.microsoft.com/library/91de3a29-120c-4332-a670-e078ba8d20e2.aspx)

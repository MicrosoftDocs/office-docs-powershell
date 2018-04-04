---
external help file: Microsoft.Exchange.RolesAndAccess-Help.xml
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
title: Import-RecipientDataProperty
schema: 2.0.0
---

# Import-RecipientDataProperty

## SYNOPSIS
This cmdlet is available only in on-premises Exchange.

Use the Import-RecipientDataProperty cmdlet to add a picture or an audio file of a spoken name to a mailbox or contact. The picture and audio files display on the Global Address List property dialog box, contact card, reading pane, and meeting requests in Microsoft Outlook and Outlook on the web.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

### Set1
```
Import-RecipientDataProperty [-Identity] <MailboxUserContactIdParameter> -FileData <Byte[]> [-Confirm]
 [-DomainController <Fqdn>] [-Picture] [-WhatIf] [<CommonParameters>]
```

### Set2
```
Import-RecipientDataProperty [-Identity] <MailboxUserContactIdParameter> -FileData <Byte[]> [-Confirm]
 [-DomainController <Fqdn>] [-SpokenName] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
Importing and exporting files require a specific syntax because importing and exporting use Remote PowerShell.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### Example 1
```
Import-RecipientDataProperty -Identity "Tony Smith" -SpokenName -FileData ([Byte[]]$(Get-Content -Path "M:\AudioFiles\TonySmith.wma" -Encoding Byte -ReadCount 0))
```

This example imports the audio file for Tony Smith's spoken name.

### Example 2
```
Import-RecipientDataProperty -Identity Ayla -Picture -FileData ([Byte[]]$(Get-Content -Path "M:\Employee Photos\AylaKol.jpg" -Encoding Byte -ReadCount 0))
```

This example imports the picture file for Ayla Kol.

## PARAMETERS

### -FileData
The FileData parameter specifies the location and file name of the picture or audio file.

A valid value for this parameter requires you to read the file to a byte-encoded object using the Get-Content cmdlet. For example, ([Byte[]](Get-Content -Encoding Byte -Path "C:\\My Documents\\\<filename\>" -ReadCount 0)).

```yaml
Type: Byte[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
The Identity parameter specifies the mailbox or contact that you're adding the picture or spoken name file to. You can use any value that uniquely identifies the user.

For example:

- Name

- Display name

- Distinguished name (DN)

- Canonical DN

- GUID

```yaml
Type: MailboxUserContactIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Picture
The Picture switch specifies that the file you're importing is a picture file. You don't need to specify a value with this switch.

The picture must be a JPEG file and shouldn't be larger than 10 kilobytes (KB). You can't use this switch with the SpokenName switch. You can only import one file type at a time.

```yaml
Type: SwitchParameter
Parameter Sets: Set1
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SpokenName
The SpokenName switch specifies that the file you're importing is an audio file. You don't need to specify a value with this switch.

The maximum file size should be less than 32 KB. You can use one of the following formats:

- WMA 9-voice

- PCM 8-KHz, 16-bits, mono format

You can't use this switch with the Picture switch. You can only import one file type at a time.

```yaml
Type: SwitchParameter
Parameter Sets: Set2
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
Aliases: wi
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

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

[Online Version](https://technet.microsoft.com/library/f3baf354-3d7d-4909-b4fa-754d1e44bf1f.aspx)

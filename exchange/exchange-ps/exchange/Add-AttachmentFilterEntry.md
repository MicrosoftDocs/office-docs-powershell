---
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
schema: 2.0.0
---

# add-attachmentfilterentry

## SYNOPSIS
!!! Exchange Server 2010

Use the Add-AttachmentFilterEntry cmdlet to add an entry to the attachment filter list on a computer that has the Edge Transport server role installed.

!!! Exchange Server 2013

This cmdlet is available or effective only on Edge Transport servers in on-premises Exchange Server 2013.

Use the Add-AttachmentFilterEntry cmdlet to add an entry to the attachment filter list that's used by the Attachment Filtering agent on Edge Transport servers.

!!! Exchange Server 2016

This cmdlet is available or effective only on Edge Transport servers in on-premises Exchange.

Use the Add-AttachmentFilterEntry cmdlet to add an entry to the attachment filter list that's used by the Attachment Filtering agent on Edge Transport servers.

## SYNTAX

```
add-attachmentfilterentry [-Name] <String> -Type <ContentType | FileName> [-Confirm] [-DomainController <Fqdn>]
 [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
!!! Exchange Server 2010

The Attachment Filter agent can block attachments from entering your Microsoft Exchange Server 2010 organization based on the content type and the file name of the attachment. You can use the Add-AttachmentFilterEntry cmdlet to add file names or MIME content types to the list of attachments that are filtered.

The configuration of the Attachment Filter agent determines how attachments are processed. For more information about how to configure the Attachment Filter agent, see Set-AttachmentFilterListConfig.

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "Anti-spam features" entry in the Transport Permissions topic.

!!! Exchange Server 2013

On Edge Transport servers, the Attachment Filtering agent blocks attachments in messages based on the content type and the file name of the attachment. The configuration of the Attachment Filtering agent determines how messages that contain the specified attachments are processed. For more information about how to configure the Attachment Filtering agent, see Set-AttachmentFilterListConfig.

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "Anti-spam features - Edge Transport" entry in the Anti-spam and anti-malware permissions topic.

!!! Exchange Server 2016

On Edge Transport servers, the Attachment Filtering agent blocks attachments in messages based on the content type and the file name of the attachment. The configuration of the Attachment Filtering agent determines how messages that contain the specified attachments are processed. For more information about how to configure the Attachment Filtering agent, see Set-AttachmentFilterListConfig.

On Edge Transport servers, you need to be a member of the local Administrators group to run this cmdlet.

## EXAMPLES

### Example 1 -------------------------- (Exchange Server 2010)
```
Add-AttachmentFilterEntry -Name *.txt -Type FileName
```

This example adds an attachment filter entry based on a file name. After running this command, the Attachment Filter agent filters all attachments that have a .txt extension.

### Example 1 -------------------------- (Exchange Server 2013)
```
Add-AttachmentFilterEntry -Name *.txt -Type FileName
```

This example adds an attachment filter entry based on a file name. After running this command, the Attachment Filtering agent filters all attachments that have a .txt extension.

### Example 1 -------------------------- (Exchange Server 2016)
```
Add-AttachmentFilterEntry -Name *.txt -Type FileName
```

This example adds an attachment filter entry based on a file name. After running this command, the Attachment Filtering agent filters all attachments that have a .txt extension.

### Example 2 -------------------------- (Exchange Server 2010)
```
Add-AttachmentFilterEntry -Name image/jpeg -Type ContentType
```

This example adds an attachment filter entry based on the MIME content type image/jpeg, which is a JPEG image binary file. After running this command, the Attachment Filter agent filters all attachments of the MIME content type image/jpeg.

### Example 2 -------------------------- (Exchange Server 2013)
```
Add-AttachmentFilterEntry -Name image/jpeg -Type ContentType
```

This example adds an attachment filter entry based on the MIME content type image/jpeg, which is a JPEG image binary file. After running this command, the Attachment Filtering agent filters all attachments of the MIME content type image/jpeg.

### Example 2 -------------------------- (Exchange Server 2016)
```
Add-AttachmentFilterEntry -Name image/jpeg -Type ContentType
```

This example adds an attachment filter entry based on the MIME content type image/jpeg, which is a JPEG image binary file. After running this command, the Attachment Filtering agent filters all attachments of the MIME content type image/jpeg.

## PARAMETERS

### -Name
The Name parameter specifies the MIME content type or file name of the attachment. If the Type parameter is set to FileName, the Name parameter can take any exact file name, such as BadFile.exe, or file name extension, such as \*.exe. If the Type parameter is set to ContentType, the Name parameter can take any valid MIME content type.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: True
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Type
!!! Exchange Server 2010, Exchange Server 2013

The Type parameter specifies what type of attachment the attachment filter entry blocks. Valid values are ContentType and FileName:

- ContentType This value matches the attachment filter entry against the MIME content type specified in the Name parameter.

- FileName This value matches the attachment filter entry against the simple file name specified in the Name parameter.



!!! Exchange Server 2016

The Type parameter specifies what type of attachment the attachment filter entry blocks. Valid values are ContentType and FileName:

- ContentType: This value matches the attachment filter entry against the MIME content type specified in the Name parameter.

- FileName: This value matches the attachment filter entry against the simple file name specified in the Name parameter.



```yaml
Type: ContentType | FileName
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: True
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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController
The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.

The DomainController parameter isn't supported on Edge Transport servers. An Edge Transport server uses the local instance of Active Directory Lightweight Directory Services (AD LDS) to read and write data.

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

### -WhatIf
The WhatIf switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
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

[Online Version](https://technet.microsoft.com/library/9c9d35c8-2833-443f-ab50-c7232be4aba4.aspx)


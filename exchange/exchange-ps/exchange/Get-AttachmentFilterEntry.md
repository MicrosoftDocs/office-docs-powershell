---
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
schema: 2.0.0
---

# get-attachmentfilterentry

## SYNOPSIS
!!! Exchange Server 2010

Use the Get-AttachmentFilterEntry cmdlet to view the list of attachment filter entries configured on a computer that has the Edge Transport server role installed.

!!! Exchange Server 2013

This cmdlet is available or effective only on Edge Transport servers in on-premises Exchange Server 2013.

Use the Get-AttachmentFilterEntry cmdlet to view the list of attachment filter entries that are used by the Attachment Filtering agent on Edge Transport servers.

!!! Exchange Server 2016

This cmdlet is available or effective only on Edge Transport servers in on-premises Exchange.

Use the Get-AttachmentFilterEntry cmdlet to view the list of attachment filter entries that are used by the Attachment Filtering agent on Edge Transport servers.

## SYNTAX

```
get-attachmentfilterentry [[-Identity] <String>] [-DomainController <Fqdn>] [<CommonParameters>]
```

## DESCRIPTION
!!! Exchange Server 2010

The Attachment Filter agent can block attachments from entering the Microsoft Exchange Server 2010 organization based on the content type or file name of the attachment. The configuration of the Attachment Filter agent determines how attachments are processed.

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
Get-AttachmentFilterEntry
```

This example returns all attachment filter entries.

### Example 1 -------------------------- (Exchange Server 2013)
```
Get-AttachmentFilterEntry
```

This example returns all attachment filter entries.

### Example 1 -------------------------- (Exchange Server 2016)
```
Get-AttachmentFilterEntry
```

This example returns all attachment filter entries.

### Example 2 -------------------------- (Exchange Server 2010)
```
Get-AttachmentFilterEntry -Identity FileName:*.txt
```

This example returns only the attachment filter entries that filter file names with a .txt extension.

### Example 2 -------------------------- (Exchange Server 2013)
```
Get-AttachmentFilterEntry FileName:*.txt
```

This example returns only the attachment filter entries that filter file names with a .txt extension.

### Example 2 -------------------------- (Exchange Server 2016)
```
Get-AttachmentFilterEntry FileName:*.txt
```

This example returns only the attachment filter entries that filter file names with a .txt extension.

### Example 3 -------------------------- (Exchange Server 2010)
```
Get-AttachmentFilterEntry -Identity ContentType:image/jpeg
```

This example returns only the attachment filter entries that filter attachments that have the MIME content type image/jpeg.

### Example 3 -------------------------- (Exchange Server 2013)
```
Get-AttachmentFilterEntry ContentType:image/jpeg
```

This example returns only the attachment filter entries that filter attachments that have the MIME content type image/jpeg.

### Example 3 -------------------------- (Exchange Server 2016)
```
Get-AttachmentFilterEntry ContentType:image/jpeg
```

This example returns only the attachment filter entries that filter attachments that have the MIME content type image/jpeg.

## PARAMETERS

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

### -Identity
!!! Exchange Server 2010, Exchange Server 2013

The Identity parameter specifies which attachment filter entry the command retrieves. The Identity parameter accepts values in the format Type:Name, where Type is one of the following values:

- ContentType This value matches the attachment filter entry against the MIME content type.

- FileName This value matches the attachment filter entry against the simple file name.



!!! Exchange Server 2016

The Identity parameter specifies which attachment filter entry the command retrieves. The Identity parameter accepts values in the format Type:Name, where Type is one of the following values:

- ContentType: This value matches the attachment filter entry against the MIME content type.

- FileName: This value matches the attachment filter entry against the simple file name.



```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: 1
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

[Online Version](https://technet.microsoft.com/library/c181b910-b2a3-4e68-8a10-7bb3d2b92ddb.aspx)


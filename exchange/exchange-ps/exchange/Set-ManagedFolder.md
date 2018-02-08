---
applicable: Exchange Server 2010
schema: 2.0.0
---

# Set-ManagedFolder

## SYNOPSIS
Use the Set-ManagedFolder cmdlet to modify the settings of managed folders.

## SYNTAX

```
Set-ManagedFolder [-Identity] <ELCFolderIdParameter> [-BaseFolderOnly <$true | $false>] [-Comment <String>]
 [-Confirm] [-DomainController <Fqdn>] [-FolderName <String>] [-LocalizedComment <MultiValuedProperty>]
 [-LocalizedFolderName <MultiValuedProperty>] [-MustDisplayCommentEnabled <$true | $false>] [-Name <String>]
 [-StorageQuota <Unlimited>] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
The Set-ManagedFolder cmdlet modifies the specified parameters of a managed folder.

The Set-ManagedFolder cmdlet accepts a managed custom folder or an identity string as pipelined input.

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "Messaging records management" entry in the Messaging Policy and Compliance Permissions topic.

## EXAMPLES

### Example 1 -------------------------- (Exchange Server 2010)
```
Set-ManagedFolder MyManagedFolder -StorageQuota 100KB
```

This example sets the storage quota for the managed folder MyManagedFolder to 100 KB.

## PARAMETERS

### -Identity
The Identity parameter specifies the name, distinguished name (DN), or GUID of the managed folder.

```yaml
Type: ELCFolderIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010

Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -BaseFolderOnly
The BaseFolderOnly parameter specifies whether the managed content settings should be applied only to the managed folder or to the folder and all its subfolders.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Comment
The Comment parameter specifies the default administrator comment to be displayed with the folder in Microsoft Office Outlook 2007.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010

Required: False
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
Applicable: Exchange Server 2010

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
Applicable: Exchange Server 2010

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -FolderName
The FolderName parameter specifies the name of the folder object as it appears in users' mailboxes.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LocalizedComment
The LocalizedComment parameter specifies localized administrator comments and their languages. Localized comments are displayed instead of the default comment when the language setting of any client that displays comments matches a language specified for this parameter value. Comments must be in the form ISOLanguageCode:Comment, for example, -LocalizedComment EN-US:"This is a localized comment in U.S. English."

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LocalizedFolderName
The LocalizedFolderName parameter specifies localized folder names and their languages. Localized folder names are displayed instead of the default folder name when the language setting of Outlook 2007 matches a language specified for this parameter value. Comments must be in the form ISOLanguageCode:Comment, for example, -LocalizedFolderName EN-US:"This is a localized folder name in U.S. English."

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MustDisplayCommentEnabled
The MustDisplayCommentEnabled parameter specifies whether to set a flag that's used by any client that displays comments and accepts this setting. If this parameter is set to $true, a flag is set that prevents users from minimizing a folder comment, which is visible in Outlook 2007 only. If the parameter isn't present or is set to $false, users can minimize the comment.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Name
The Name parameter specifies a unique name for the content settings. The Name parameter doesn't appear in users' mailboxes.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -StorageQuota
The StorageQuota parameter specifies the storage size limit for the mailbox folder. When the folder size exceeds this limit, no additional items may be added. Mailbox sizes can be specified in kilobytes (KB) or megabytes (MB), for example, as 100KB or 5MB. The StorageQuota parameter is valid for managed custom folders in Outlook 2007.

```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010

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
Applicable: Exchange Server 2010

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

[Online Version](https://technet.microsoft.com/library/88a3c359-acf0-4757-915f-28e0dfc22605.aspx)


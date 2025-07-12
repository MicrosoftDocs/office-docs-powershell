---
external help file: Microsoft.Exchange.RolesAndAccess-Help.xml
online version: https://learn.microsoft.com/powershell/module/exchange/remove-userphoto
applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019
title: Remove-UserPhoto
schema: 2.0.0
author: chrisda
ms.author: chrisda
Module Name: exchange
---

# Remove-UserPhoto

## SYNOPSIS
This cmdlet is available only in on-premises Exchange.

Use the Remove-UserPhoto cmdlet to delete the photo associated with a user's account. The user photo feature allows users to associate a picture with their account. User photos appear in client applications, such as Outlook, Microsoft Teams, and SharePoint.

**Note**: In Microsoft 365, you can manage user photos in Microsoft Graph PowerShell. For instructions, see [Manage user photos in Microsoft Graph PowerShell](https://learn.microsoft.com/microsoft-365/admin/add-users/change-user-profile-photos#manage-user-photos-in-microsoft-graph-powershell).

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

### Identity
```
Remove-UserPhoto [-Identity] <MailboxIdParameter>
 [-Confirm]
 [-DomainController <Fqdn>]
 [-IgnoreDefaultScope]
 [-WhatIf]
 [<CommonParameters>]
```

### ClearMailboxPhoto
```
Remove-UserPhoto [-Identity] <MailboxIdParameter>
 [-ClearMailboxPhotoRecord]
 [-GroupMailbox]
 [-PhotoType <String>]
 [-Confirm]
 [-DomainController <Fqdn>]
 [-IgnoreDefaultScope]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
Use the Remove-UserPhoto cmdlet to delete the user photo currently associated with a user's account. This cmdlet removes the photo from user's Exchange mailbox root.
In on-premises Exchange, it also removes the user's photo from their Active Directory account. Administrators can also use the Exchange admin center (EAC) to delete user photos by accessing the Options page in the user's mailbox in Outlook on the web.

**Notes**: Changes to the user photo won't appear in SharePoint until the affected user visits their profile page (My Site) or any SharePoint page that shows their large thumbnail image.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Remove-UserPhoto "Ann Beebe"
```

This example deletes the photo associated with Ann Beebe's user account.

## PARAMETERS

### -Identity
The Identity parameter specifies the identity of the user. You can use any value that uniquely identifies the user. For example:

- Name
- Alias
- Distinguished name (DN)
- Canonical DN
- Domain\\Username
- Email address
- GUID
- LegacyExchangeDN
- SamAccountName
- User ID or user principal name (UPN)

```yaml
Type: MailboxIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -ClearMailboxPhotoRecord
The ClearMailboxPhoto switch specifies that a deleted mailbox photo is considered blank instead of deleted. You don't need to specify a value with this switch.

By default, when a user deletes their mailbox photo, a flag is set on the mailbox that causes subsequent photo requests to:

- Return a blank photo.
- Prevent searching Active Directory for a photo.

Using this switch allows photo requests to search Active Directory for a photo.

```yaml
Type: SwitchParameter
Parameter Sets: ClearMailboxPhoto
Aliases:
Applicable: Exchange Server 2016, Exchange Server 2019

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
The Confirm switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding.

- Destructive cmdlets (for example, Remove-\* cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.
- Most other cmdlets (for example, New-\* and Set-\* cmdlets) don't have a built-in pause. For these cmdlets, specifying the Confirm switch without a value introduces a pause that forces you acknowledge the command before proceeding.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

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
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -GroupMailbox
The GroupMailbox switch is required to modify Microsoft 365 Groups. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: ClearMailboxPhoto
Aliases:
Applicable: Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IgnoreDefaultScope
The IgnoreDefaultScope switch tells the command to ignore the default recipient scope setting for the Exchange PowerShell session, and to use the entire forest as the scope. You don't need to specify a value with this switch.

This switch enables the command to access Active Directory objects that aren't currently available in the default scope, but also introduces the following restrictions:

- You can't use the DomainController parameter. The command uses an appropriate global catalog server automatically.
- You can only use the DN for the Identity parameter. Other forms of identification, such as alias or GUID, aren't accepted.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PhotoType
This parameter is reserved for internal Microsoft use.

```yaml
Type: String
Parameter Sets: ClearMailboxPhoto
Aliases:
Applicable: Exchange Server 2016, Exchange Server 2019

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
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

### Input types
To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

### Output types
To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS

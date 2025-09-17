---
applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE
author: chrisda
external help file: Microsoft.Exchange.RolesAndAccess-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchangepowershell/set-userphoto
schema: 2.0.0
title: Set-UserPhoto
---

# Set-UserPhoto

## SYNOPSIS
This cmdlet is available only in on-premises Exchange.

Use the Set-UserPhoto cmdlet to configure the user photos feature that allows users to associate a picture with their account. User photos appear in client applications, such as Outlook, Microsoft Teams, and SharePoint.

**Note**: In Microsoft 365, you can manage user photos in Microsoft Graph PowerShell. For instructions, see [Manage user photos in Microsoft Graph PowerShell](https://learn.microsoft.com/microsoft-365/admin/add-users/change-user-profile-photos#manage-user-photos-in-microsoft-graph-powershell).

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

### CancelPhoto
```
Set-UserPhoto [-Identity] <MailboxIdParameter>
 [-Cancel]
 [-Confirm]
 [-GroupMailbox]
 [-DomainController <Fqdn>]
 [-IgnoreDefaultScope]
 [-PhotoType <String>]
 [-UseCustomRouting]
 [-WhatIf]
 [<CommonParameters>]
```

### UploadPhotoData
```
Set-UserPhoto [-Identity] <MailboxIdParameter> -PictureData <Byte[]>
 [-Confirm]
 [-DomainController <Fqdn>]
 [-GroupMailbox]
 [-IgnoreDefaultScope]
 [-PhotoType <String>]
 [-UseCustomRouting]
 [-WhatIf]
 [<CommonParameters>]
```

### UploadPreview
```
Set-UserPhoto [-Identity] <MailboxIdParameter>
 [-PictureData <Byte[]>]
 [-PictureStream <Stream>]
 [-Preview]
 [-Confirm]
 [-DomainController <Fqdn>]
 [-GroupMailbox]
 [-IgnoreDefaultScope]
 [-PhotoType <String>]
 [-UseCustomRouting]
 [-WhatIf]
 [<CommonParameters>]
```

### UploadPhotoStream
```
Set-UserPhoto [-Identity] <MailboxIdParameter> -PictureStream <Stream>
 [-Confirm]
 [-DomainController <Fqdn>]
 [-GroupMailbox]
 [-IgnoreDefaultScope]
 [-PhotoType <String>]
 [-UseCustomRouting]
 [-WhatIf]
 [<CommonParameters>]
```

### SavePhoto
```
Set-UserPhoto [-Identity] <MailboxIdParameter>
 [-Save]
 [-Confirm]
 [-DomainController <Fqdn>]
 [-GroupMailbox]
 [-IgnoreDefaultScope]
 [-PhotoType <String>]
 [-UseCustomRouting]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
The user photos feature allows users to associate a picture with their account. User photos are stored in the user's Active Directory account and in the root directory of the user's Exchange mailbox. Administrators use the Set-UserPhoto cmdlet to configure user photos. Users can upload, preview, and save a user photo to their account in the Options page in Outlook on the web. When a user uploads a photo, a preview of the photo is displayed on the Options page in Outlook on the web. This is the preview state, and creates the same result as running the Set-UserPhoto cmdlet using the Preview parameter. If the user clicks Save, the preview photo is saved as the user's photo. This is the same result as running the `Set-UserPhoto -Save` command or running both the `Set-UserPhoto -Preview` and `Set-UserPhoto -Save` commands. If the user cancels the preview photo on the Options page in Outlook on the web, then the `Set-UserPhoto -Cancel` command is called.

A user photo must be set for a user before you can run the Get-UserPhoto cmdlet to view information about the user's photo. Otherwise, you get an error message saying the user photo doesn't exist for the specified user. Alternatively, you can run the `Get-UserPhoto -Preview` command to view information about a preview photo.

**Notes**: Changes to the user photo don't appear in SharePoint until the affected user visits their profile page (My Site) or any SharePoint page that shows their large thumbnail image.

You need to be assigned permissions before you can run this cmdlet. Although this article lists all parameters for the cmdlet, you might not have access to some parameters if they aren't included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Set-UserPhoto -Identity "Paul Cannon" -PictureData ([System.IO.File]::ReadAllBytes("C:\Users\Administrator\Desktop\PaulCannon.jpg"))
```

This example uploads and saves a photo to Paul Cannon's user account using a single command.

### Example 2
```powershell
Set-UserPhoto -Identity "Ann Beebe" -PictureData ([System.IO.File]::ReadAllBytes("C:\Users\Administrator\Desktop\AnnBeebe.jpg")) -Preview

Set-UserPhoto "Ann Beebe" -Save
```

This example shows how to use two commands to upload and save a preview photo to Ann Beebe's user account. The first command uploads a preview photo to Ann Beebe's user account, and the second command saves the uploaded photo as the preview photo.

### Example 3
```powershell
Set-UserPhoto -Identity "Ann Beebe" -Cancel
```

This example deletes the preview photo that was uploaded in the previous example.

## PARAMETERS

### -Identity

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

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

Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -Cancel

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

The Cancel switch deletes the current preview photo. You don't need to specify a value with this switch.

To delete the photo that's currently associated with a user's account, use the Remove-UserPhoto cmdlet. The Cancel switch only deletes the preview photo.

```yaml
Type: SwitchParameter
Parameter Sets: CancelPhoto
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PictureData

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

The PictureData parameter specifies the photo file to upload to the user's account.

A valid value for this parameter requires you to read the file to a byte-encoded object using the following syntax: `([System.IO.File]::ReadAllBytes('<Path>\<FileName>'))`. You can use this command as the parameter value, or you can write the output to a variable (`$data = [System.IO.File]::ReadAllBytes('<Path>\<FileName>')`) and use the variable as the parameter value (`$data`).

```yaml
Type: Byte[]
Parameter Sets: UploadPhotoData, UploadPreview
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PictureStream

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

The PictureStream parameter specifies the photo to upload to the user's account. This parameter is used by client applications such as Outlook on the web when users add a photo. To upload a photo using PowerShell, use the PictureData parameter to specify the photo file.

```yaml
Type: Stream
Parameter Sets: UploadPhotoStream, UploadPreview
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Preview

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

The Preview switch uploads a preview photo for the user account. You don't need to specify a value with this switch.

A preview photo is uploaded to the user's account, but isn't saved. For example, if a user uploads a photo in Outlook on the web Options to preview before saving it. If you use the Preview switch to upload a preview photo, you need to run the command `Set-UserPhoto -Save` to save it as the user's photo.

```yaml
Type: SwitchParameter
Parameter Sets: UploadPreview
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Save

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

The Save switch specifies the uploaded photo is saved as the user's photo. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: SavePhoto
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

The Confirm switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding.

- Destructive cmdlets (for example, Remove-\* cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.
- Most other cmdlets (for example, New-\* and Set-\* cmdlets) don't have a built-in pause. For these cmdlets, specifying the Confirm switch without a value introduces a pause that forces you acknowledge the command before proceeding.

This cmdlet has a built-in pause, so use `-Confirm:$false` to skip the confirmation.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -GroupMailbox

> Applicable: Exchange Server 2016, Exchange Server 2019, Exchange Server SE

The GroupMailbox switch is required to modify Microsoft 365 Groups. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IgnoreDefaultScope

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

The IgnoreDefaultScope switch tells the command to ignore the default recipient scope setting for the Exchange PowerShell session, and to use the entire forest as the scope. You don't need to specify a value with this switch.

This switch enables the command to access Active Directory objects that aren't currently available in the default scope, but also introduces the following restrictions:

- You can't use the DomainController parameter. The command uses an appropriate global catalog server automatically.
- You can only use the DN for the Identity parameter. Other forms of identification, such as alias or GUID, aren't accepted.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PhotoType

> Applicable: Exchange Server 2016, Exchange Server 2019, Exchange Server SE

This parameter is reserved for internal Microsoft use.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

The WhatIf switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi

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

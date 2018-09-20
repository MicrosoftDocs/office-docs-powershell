---
external help file: Microsoft.Exchange.RolesAndAccess-Help.xml
applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online
title: Set-UserPhoto
schema: 2.0.0
monikerRange: "exchserver-ps-2013 || exchserver-ps-2016 || exchserver-ps-2019 || exchonline-ps"
---

# Set-UserPhoto

## SYNOPSIS
This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the Set-UserPhoto cmdlet to configure the user photos feature that allows users to associate a picture with their account. User photos appear in on-premises and cloud-based client applications, such as Outlook on the web, Lync, Skype for Business, and SharePoint.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

### Set3
```
Set-UserPhoto [-Identity] <MailboxIdParameter> [-Cancel] [-Confirm] [-DomainController <Fqdn>]
 [-IgnoreDefaultScope] [-WhatIf] [-GroupMailbox] [-PhotoType <String>] [<CommonParameters>]
```

### Set1
```
Set-UserPhoto [-Identity] <MailboxIdParameter> -PictureData <Byte[]> [-Confirm] [-DomainController <Fqdn>]
 [-IgnoreDefaultScope] [-WhatIf] [-GroupMailbox] [-PhotoType <String>] [<CommonParameters>]
```

### Set5
```
Set-UserPhoto [-Identity] <MailboxIdParameter> [-PictureData <Byte[]>] [-PictureStream <Stream>] [-Preview]
 [-Confirm] [-DomainController <Fqdn>] [-IgnoreDefaultScope] [-WhatIf] [-GroupMailbox] [-PhotoType <String>]
 [<CommonParameters>]
```

### Set2
```
Set-UserPhoto [-Identity] <MailboxIdParameter> -PictureStream <Stream> [-Confirm] [-DomainController <Fqdn>]
 [-IgnoreDefaultScope] [-WhatIf] [-GroupMailbox] [-PhotoType <String>] [<CommonParameters>]
```

### Set4
```
Set-UserPhoto [-Identity] <MailboxIdParameter> [-Save] [-Confirm] [-DomainController <Fqdn>]
 [-IgnoreDefaultScope] [-WhatIf] [-GroupMailbox] [-PhotoType <String>] [<CommonParameters>]
```

## DESCRIPTION
The user photos feature allows users to associate a picture with their account. User photos are stored in the user's Active Directory account and in the root directory of the user's Exchange mailbox. Administrators use the Set-UserPhoto cmdlet to configure user photos. Users can upload, preview, and save a user photo to their account by using the Outlook on the web Options page. When a user uploads a photo, a preview of the photo is displayed on the Outlook on the web Options page. This is the preview state, and creates the same result as running the Set-UserPhoto cmdlet using the Preview parameter. If the user clicks Save, the preview photo is saved as the user's photo. This is the same result as running the Set-UserPhoto -Save command or running both the Set-UserPhoto -Preview and Set-UserPhoto -Save commands. If the user cancels the preview photo on the Outlook on the web Options page, then the Set-UserPhoto -Cancel command is called.

A user photo must be set for a user before you can run the Get-UserPhoto cmdlet to view information about the user's photo. Otherwise, you'll get an error message saying the user photo doesn't exist for the specified user. Alternatively, you can run the Get-UserPhoto -Preview command to view information about a preview photo.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Set-UserPhoto -Identity "Paul Cannon" -PictureData ([System.IO.File]::ReadAllBytes("C:\Users\Administrator\Desktop\PaulCannon.jpg"))
```

This example uploads and saves a photo to Paul Cannon's user account using a single command.

### -------------------------- Example 2 --------------------------
```
Set-UserPhoto -Identity "Ann Beebe" -PictureData ([System.IO.File]::ReadAllBytes("C:\Users\Administrator\Desktop\AnnBeebe.jpg")) -Preview; Set-UserPhoto "Ann Beebe" -Save
```

This example shows how to use two commands to upload and save a preview photo to Ann Beebe's user account. The first command uploads a preview photo to Ann Beebe's user account, and the second command saves the uploaded photo as the preview photo.

### -------------------------- Example 3 --------------------------
```
Set-UserPhoto -Identity "Ann Beebe" -Cancel
```

This example deletes the preview photo that was uploaded in the previous example.

## PARAMETERS

### -Cancel
The Cancelswitch parameter deletes the photo that's currently uploaded as the preview photo. You don't need to specify a value with this switch.

To delete the photo that's currently associated with a user's account, use the Remove-UserPhotocmdlet. The Cancelswitch only deletes the preview photo.

```yaml
Type: SwitchParameter
Parameter Sets: Set3
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online
Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
The Identity parameter specifies the identity of the user. You can use any value that uniquely identifies the user.

For example:

- Name

- Display name

- Alias

- Distinguished name (DN)

- Canonical DN

- \<domain name\>\\\<account name\>

- Email address

- GUID

- LegacyExchangeDN

- SamAccountName

- User ID or user principal name (UPN)

```yaml
Type: MailboxIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online
Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -PictureData
The PictureData parameter specifies the photo file that will be uploaded to the user's account.

This parameter uses the syntax ([System.IO.File]::ReadAllBytes("\<file name and path\>")). The following is an example. ([System.IO.File]::ReadAllBytes("C:\\Documents\\Pictures\\MyPhoto.jpg")).

```yaml
Type: Byte[]
Parameter Sets: Set1
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online
Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

```yaml
Type: Byte[]
Parameter Sets: Set5
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PictureStream
The PictureStream parameter specifies the photo that will be uploaded to the user's account. This parameter is used by client applications such as Outlook on the web when users add a photo. To upload a photo using PowerShell, use the PictureData parameter to specify the photo file.

```yaml
Type: Stream
Parameter Sets: Set5
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

```yaml
Type: Stream
Parameter Sets: Set2
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online
Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Preview
The Previewswitch uploads a preview photo for the user account. You don't need to specify a value with this switch.

A preview photo is the photo object that is uploaded to the user's account, but isn't saved. For example, if a user uploads a photo in Outlook on the web Options to preview before saving it. If you use the Previewswitch to upload a preview photo, you need to run the command Set-UserPhoto -Save to save it as the user's photo.

```yaml
Type: SwitchParameter
Parameter Sets: Set5
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online
Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Save
The Saveswitch specifies that the photo that's uploaded to the user's account will be saved as the user's photo. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: Set4
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online
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
Aliases: cf
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController
This parameter is available only in on-premises Exchange.

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

### -IgnoreDefaultScope
The IgnoreDefaultScope switch tells the command to ignore the default recipient scope setting for the Exchange Management Shell session and to use the entire forest as the scope. This allows the command to access Active Directory objects that aren't currently available in the default scope.

Using the IgnoreDefaultScope switch introduces the following restrictions:

- You can't use the DomainController parameter. The command uses an appropriate global catalog server automatically.

- You can only use the DN for the Identity parameter. Other forms of identification, such as alias or GUID, aren't accepted.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online
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
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -GroupMailbox
The GroupMailbox switch indicates the specified user is an Office 365 Group. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016, Exchange Server 2019, Exchange Online
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
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016, Exchange Server 2019, Exchange Online
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

[Online Version](https://technet.microsoft.com/library/b4990d83-79c1-4b75-9271-4fa69757195e.aspx)

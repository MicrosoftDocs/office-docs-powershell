---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml 
online version: https://learn.microsoft.com/powershell/module/skype/new-csexternalusercommunicationpolicy
applicable: Skype for Business Online
title: New-CsExternalUserCommunicationPolicy
schema: 2.0.0
manager: bulenteg
author: tomkau
ms.author: tomkau
ms.reviewer: williamlooney
---

# New-CsExternalUserCommunicationPolicy

## SYNOPSIS
Creates a new external user communication policy for use in your organization to block P2P file transfer with Federated partners only.

## SYNTAX

```
New-CsExternalUserCommunicationPolicy [-Tenant <Guid>] [-EnableFileTransfer <Boolean>]
 [-EnableP2PFileTransfer <Boolean>] [-AllowPresenceVisibility <Boolean>] [-AllowTitleVisibility <Boolean>]
 [-Identity] <XdsIdentity> [-InMemory] [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
Before this cmdlet, Skype for Business Online already offered the ability to control P2P file transfer as part of the existing conferencing policy settings. However, this option allowed or blocked file transfer for users no matter if they are transferring files to a user who is hosted on the same company or Federated user.

This cmdlet allows you to block P2P file transfer with Federated partners only.

## EXAMPLES

### Example 1 
```
PS C:\> New-CsExternalUserCommunicationPolicy -Identity BlockExternalP2PFileTransfer -EnableP2PFileTransfer $False
```

This example creates a new policy to block external file transfer. Then you can use `Grant-CsExternalUserCommunicationPolicy` to assign it to an user account.

## PARAMETERS

### -EnableP2PFileTransfer
Indicates whether file transfers to Federated partners are allowed. The default value is True.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnableFileTransfer
This parameter is reserved for internal Microsoft use.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowPresenceVisibility
This parameter is reserved for internal Microsoft use.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowTitleVisibility
This parameter is reserved for internal Microsoft use.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
Prompts you for confirmation before running the cmdlet.

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

### -Identity
Unique identifier for the external user communication policy to be created.

```yaml
Type: XdsIdentity
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
The Force switch specifies whether to suppress warning and confirmation messages. It can be useful in scripting to suppress interactive prompts. If the Force switch isn't provided in the command, you're prompted for administrative input if required.

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

### -InMemory
{{Fill InMemory Description}}

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

### -Tenant
Globally unique identifier (GUID) of the tenant account whose external user communication policy are being created. For example:

`-Tenant "38aad667-af54-4397-aaa7-e94c79ec2308"`

You can return your tenant ID by running this command:

`Get-CsTenant | Select-Object DisplayName, TenantID`

If you are using a remote session of Windows PowerShell and are connected only to Skype for Business Online you do not have to include the Tenant parameter. Instead, the tenant ID will automatically be filled in for you based on your connection information. The Tenant parameter is primarily for use in a hybrid deployment.

```yaml
Type: Guid
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
Shows what would happen if the cmdlet runs. The cmdlet is not run.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: `-Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/?LinkID=113216).`

## INPUTS

### None

## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS
[Set-CsExternalUserCommunicationPolicy](https://learn.microsoft.com/powershell/module/skype/set-csexternalusercommunicationpolicy?view=skype-ps)

[Get-CsExternalUserCommunicationPolicy](https://learn.microsoft.com/powershell/module/skype/get-csexternalusercommunicationpolicy?view=skype-ps)

[Remove-CsExternalUserCommunicationPolicy](https://learn.microsoft.com/powershell/module/skype/remove-csexternalusercommunicationpolicy?view=skype-ps)

[Grant-CsExternalUserCommunicationPolicy](https://learn.microsoft.com/powershell/module/skype/grant-csexternalusercommunicationpolicy?view=skype-ps)

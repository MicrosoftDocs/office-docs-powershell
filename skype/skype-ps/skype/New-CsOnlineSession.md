---
external help file: SkypeOnlineConnectorStartup-help.xml
applicable: Skype for Business Online
online version: https://docs.microsoft.com/powershell/module/skype/new-csonlinesession
schema: 2.0.0
manager: bulenteg
author: tomkau
ms.author: tomkau
ms.reviewer:
---

# New-CsOnlineSession

## SYNOPSIS
Creates a persistent connection to Microsoft Skype for Business Online DataCenter.

## SYNTAX

### UserName (Default)
```
New-CsOnlineSession [[-UserName] <String>] [-OverrideAdminDomain <String>] [-OverrideDiscoveryUri <Uri>]
 [-OverridePowerShellUri <Uri>] [-OverrideAccessTokenResourceUri <Uri>] [-SessionOption <PSSessionOption>]
 [<CommonParameters>]
```

### Credential
```
New-CsOnlineSession [[-Credential] <PSCredential>] [-OverrideAdminDomain <String>]
 [-OverrideDiscoveryUri <Uri>] [-OverridePowerShellUri <Uri>] [-OverrideAccessTokenResourceUri <Uri>]
 [-SessionOption <PSSessionOption>] [<CommonParameters>]
```

### OAuthAccessToken
```
New-CsOnlineSession [-OAuthAccessToken <SecureString>] [-OverrideAdminDomain <String>]
 [-OverrideDiscoveryUri <Uri>] [-OverridePowerShellUri <Uri>] [-OverrideAccessTokenResourceUri <Uri>]
 [-SessionOption <PSSessionOption>] [<CommonParameters>]
```

## DESCRIPTION
Enables you to create a remote Windows PowerShell session that connects to Skype for Business Online.
In this session, Skype for Business Online administrator can run Skype for Business cmdlets to manage users, policies and configurations.

## EXAMPLES

### EXAMPLE 1
```
New-CsOnlineSession -UserName admin@contoso.com
```

Establishes a Skype for Business Online Remote PowerShell session, supplying the credentials of a Skype for Business Online administrator account.

### EXAMPLE 2
```
New-CsOnlineSession -UserName admin@contoso.com -OverrideAdminDomain fabrikam.onmicrosoft.com
```

Establishes a Skype for Business Online Remote PowerShell session, with a Skype for Business Online administrator account that has permission to manage the tenant fabrikam.onmicrosoft.com that was specified using the optional OverrideAdminDomain parameter.

### EXAMPLE 3
```
$sfbSession = New-CsOnlineSession
Import-PSSession $sfbSession
```

Establishes a Skype for Business Online Remote PowerShell session using multi-factor authentication, for more information, see [Connect using a Skype for Business Online administrator account with multi-factor authentication](https://docs.microsoft.com/office365/enterprise/powershell/manage-skype-for-business-online-with-office-365-powershell#connect-using-a-skype-for-business-online-administrator-account-with-multi-factor-authentication).

## PARAMETERS

### -UserName
Specifies the Skype for Business Online administrator account name to be used when prompting for credentials.

```yaml
Type: String
Parameter Sets: UserName
Aliases:

Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Credential
Specifies a Skype for Business Online administrator, or Syndicated Partner administrator account.

Type a Skype for Business Online administrator account name, such as "admin@contoso.com", or enter a PSCredential object, such as one returned by the Get-Credential cmdlet.

When you type an account name, you will be prompted for a password.

```yaml
Type: PSCredential
Parameter Sets: Credential
Aliases:

Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OAuthAccessToken
Specifies an access token already acquired by the Skype for Business Online administrator, or Syndicated Partner administrator.

```yaml
Type: SecureString
Parameter Sets: OAuthAccessToken
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OverrideAdminDomain
Specifies the domain of the tenant to be managed. This is used when the administrator has permissions to manage more than one tenant. For example, Syndicated Partner administrators commonly manage several tenants. 

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

### -OverrideDiscoveryUri
Specifies Skype for Business Auto Discovery URI.
Optional.

```yaml
Type: Uri
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OverridePowerShellUri
Specifies Skype for Business Remote Powershell URI.
Optional.

```yaml
Type: Uri
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OverrideAccessTokenResourceUri
Specifies Skype for Business Remote Powershell Authorization Token URI.
Optional.

```yaml
Type: Uri
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SessionOption
Sets advanced options for the session.
Enter a SessionOption object, such as one that you create by using the New-PSSessionOption cmdlet, or a hash table in which the keys are session option names and the values are session option values.

```yaml
Type: PSSessionOption
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

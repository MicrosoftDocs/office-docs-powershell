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
Creates a persistent connection to Microsoft Skype For Business Online DataCenter.

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
Creates a remote session to Microsoft Skype for Business Online DataCenter.
In this session, tenant administrator can run Skype For Business cmdlets to manage users, policies and configurations.

## EXAMPLES

### EXAMPLE 1
```
New-CsOnlineSession -Credential User@Domain.com
```

Establishes a Skype for Business Online Remote PowerShell Session, supplying the credentials of a Skype for Business Online administrator account.

### EXAMPLE 2
```
New-CsOnlineSession -Credential User@Domain.com -OverrideAdminDomain TargetDomain.com
```

Establishes a Skype For Business Online Remote PowerShell Session, with a Skype for Business Online administrator account that has permission to manage the tenant contoso.onmicrosoft.com.
Please change the OverrideAdminDomain to your default tenant domain.

## PARAMETERS

### -UserName
Specifies the user name of an administrator account of the tenant to be used when prompting for credentials.

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
Specifies a user account that is Tenant Administrator, or Syndicated Partner Administrator.

Type a Skype for Business Online administrator account name, such as "User@Domain.com", or enter a PSCredential object, such as one returned by the Get-Credential cmdlet.

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
Specifies access token acquired already by the Skype for Business Online administrator, or Syndicated Partner Administrator.

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
Specifies a domain to be managed.
This could be home domain of signed in user, or a different one that he/she has permission to manage.
Optional.

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
Specifies Skype For Business Auto Discovery URI.
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
Specifies Skype For Business Remote Powershell URI.
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
Specifies Skype For Business Remote Powershell Authorization Token URI.
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

---
external help file: SkypeOnlineConnectorStartup-help.xml
applicable: Skype for Business Online
online version: https://learn.microsoft.com/powershell/module/skype/new-csonlinesession
schema: 2.0.0
manager: bulenteg
author: tomkau
ms.author: tomkau
ms.reviewer:
---

# New-CsOnlineSession

## SYNOPSIS
  > [!Note]
  > Skype for Business Online Connector is currently part of the latest Teams PowerShell module. If you're using the latest Teams PowerShell public release, you don't need to install the Skype for Business Online Connector.
  > With Teams PowerShell Module New-CsOnlineSession has been deprecated and is no longer required to connect Skype for Business Online. It has been replaced with Connect-MicrosoftTeams.


Creates a persistent connection to Microsoft Skype for Business Online DataCenter.

## SYNTAX

### Credential (Default)
```
New-CsOnlineSession [[-Credential] <PSCredential>] [-OverrideAdminDomain <String>] [-OverridePowerShellUri <Uri>] [-TeamsEnvironmentName <String>]  [-SessionOption <PSSessionOption>] [<CommonParameters>] 
```

## DESCRIPTION
Enables you to create a remote Windows PowerShell session that connects to Skype for Business Online.
In this session, Skype for Business Online administrator can run Skype for Business cmdlets to manage users, policies and configurations.

## EXAMPLES

### EXAMPLE 1
```
$credential = get-credential
New-CsOnlineSession -Credential $credential
```

Establishes a Skype for Business Online Remote PowerShell session, supplying the credentials of a Skype for Business Online administrator account.

### EXAMPLE 2
```
$credential = get-credential
New-CsOnlineSession -Credential $credential -OverrideAdminDomain fabrikam.onmicrosoft.com
```

Establishes a Skype for Business Online Remote PowerShell session, with a Skype for Business Online administrator account that has permission to manage the tenant fabrikam.onmicrosoft.com that was specified using the optional OverrideAdminDomain parameter.

### EXAMPLE 3
```
$sfbSession = New-CsOnlineSession
Import-PSSession $sfbSession
```

Establishes a Skype for Business Online Remote PowerShell session using multi-factor authentication, for more information, see [Connect using a Skype for Business Online administrator account with multi-factor authentication](https://learn.microsoft.com/office365/enterprise/powershell/manage-skype-for-business-online-with-office-365-powershell#connect-using-a-skype-for-business-online-administrator-account-with-multi-factor-authentication).

## PARAMETERS

### -Credential
Specifies a Skype for Business Online administrator, or Syndicated Partner administrator account.
Enter a PSCredential object, such as one returned by the Get-Credential cmdlet.


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

### -TeamsEnvironmentName
Use this setting if your organization is in one of the Teams Government Cloud environments.

Specify "TeamsGCCH" if your organization is in the GCC High Environment. Specify "TeamsDOD" if your organization is in the DoD Environment.

```yaml
Type: String
Parameter Sets: (All)
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

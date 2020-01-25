---
external help file: Microsoft.Open.Teams.CommonLibrary.dll-Help.xml
Module Name: MicrosoftTeams
online version: https://docs.microsoft.com/powershell/module/teams/connect-microsoftteams
schema: 2.0.0
author: kenwith
ms.author: kenwith
ms.reviewer:
---
# Connect-MicrosoftTeams

## SYNOPSIS

The Connect-MicrosoftTeams cmdlet connects an authenticated account to use for Microsoft Teams cmdlet requests.
You can use this authenticated account only with Microsoft Teams cmdlets.

## SYNTAX

### UserCredential (Default)
```
Connect-MicrosoftTeams [-TenantId <String>] [-Credential <PSCredential>] [-AccountId <String>]
 [-LogLevel <LogLevel>] [-LogFilePath <String>] [-TeamsEnvironmentName <String>] [-WhatIf] [-Confirm]
 [<CommonParameters>]
```

### ServicePrincipalCertificate
```
Connect-MicrosoftTeams -TenantId <String> -CertificateThumbprint <String> -ApplicationId <String>
 [-LogLevel <LogLevel>] [-LogFilePath <String>] [-WhatIf] [-Confirm] [<CommonParameters>]
```

### AccessToken
```
Connect-MicrosoftTeams [-TenantId <String>] -AadAccessToken <String> [-MsAccessToken <String>]
 -AccountId <String> [-LogLevel <LogLevel>] [-LogFilePath <String>] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION

## EXAMPLES

### Example 1
```powershell
PS C:\> Connect-MicrosoftTeams -TeamsEnvironmentName TeamsGCCH
```

Specifies that the organization being managed is in the Teams GCC High environment, so connect to that environment.

## PARAMETERS

### -AadAccessToken
Specifies a Azure Active Directory Graph access token.

```yaml
Type: String
Parameter Sets: AccessToken
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AccountId
Specifies the ID of an account.
You must specify the UPN of the user when authenticating with a user access token.

```yaml
Type: String
Parameter Sets: UserCredential
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

```yaml
Type: String
Parameter Sets: AccessToken
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ApplicationId
Specifies the application ID of the service principal.

```yaml
Type: String
Parameter Sets: ServicePrincipalCertificate
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CertificateThumbprint
Specifies the certificate thumbprint of a digital public key X.509 certificate of a user account that has permission to perform this action.

```yaml
Type: String
Parameter Sets: ServicePrincipalCertificate
Aliases:

Required: True
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
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -Credential
Specifies a PSCredential object.
For more information about the PSCredential object, type Get-Help Get-Credential.

The PSCredential object provides the user ID and password for organizational ID credentials.

```yaml
Type: PSCredential
Parameter Sets: UserCredential
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LogFilePath
The path where the log file for this PowerShell session is written to.
Provide a value here if you need to deviate from the default PowerShell log file location.

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

### -LogLevel
Specifies the log level. 
The acceptable values for this parameter are:

- Info
- Error
- Warning
- None

The default value is Info.

```yaml
Type: LogLevel
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MsAccessToken
Specifies a Microsoft Graph access token.

```yaml
Type: String
Parameter Sets: AccessToken
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TenantId
Specifies the ID of a tenant.

If you do not specify this parameter, the account is authenticated with the home tenant.

You must specify the TenantId parameter to authenticate as a service principal or when using Microsoft account.

```yaml
Type: String
Parameter Sets: UserCredential, AccessToken
Aliases: Domain, TenantDomain

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

```yaml
Type: String
Parameter Sets: ServicePrincipalCertificate
Aliases: Domain, TenantDomain

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
Shows what would happen if the cmdlet runs.
The cmdlet is not run.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -TeamsEnvironmentName
Use this setting if your organization is in one of the Teams Government Cloud environments.

Specify "TeamsGCCH" if your organization is in the GCC High Environment.  Specify "TeamsDOD" if your organization is in the DoD Environment. 

```yaml
Type: String
Parameter Sets: UserCredential
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable.
For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES
Tips for troubleshooting:  

**1. Confirm SAML 2.0 is being used.**\
IDP is outputting invalid SAML information.
Needs to have SAML 2.0 vs.
SAML 1.0 for the module to connect.
You might experience an error if the Identity Provider (IDP) only allows the use of SAML 1.0 when trying to auth via basic authentication. 
Which in turn, isn't expected to work because the cmdlet expects either OAUTH2 (which is used when doing just connect-microsofteams), or SAML 2.0.  

**2. Confirm you have the latest version of the cmdlet.**\
You can find the version by running: \`get-module -listavailable\` and then looking for the MicrosoftTeams name and the version to the left of it. For more information and how to download the module, see [Teams PowerShell Overview](https://docs.microsoft.com/microsoftteams/teams-powershell-overview) 

## RELATED LINKS

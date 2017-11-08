---
external help file: Microsoft.Open.Teams.CommonLibrary.dll-Help.xml
Module Name: MicrosoftTeams
applicable: Microsoft Teams
title: Connect-MicrosoftTeams
online version: 
schema: 2.0.0
---

# Connect-MicrosoftTeams

## SYNOPSIS
Note: This cmdlet is currently in Beta.

The Connect-MicrosoftTeams cmdlet connects an authenticated account to use for Microsoft Teams cmdlet requests.
You can use this authenticated account only with Microsoft Teams cmdlets.

## SYNTAX

### UserCredential (Default)
```
Connect-MicrosoftTeams [-TenantId <String>] [-Credential <PSCredential>] [-AccountId <String>]
 [-LogLevel <LogLevel>] [-LogFilePath <String>] [-WhatIf] [-Confirm]
```

### ServicePrincipalCertificate
```
Connect-MicrosoftTeams -TenantId <String> -CertificateThumbprint <String> -ApplicationId <String>
 [-LogLevel <LogLevel>] [-LogFilePath <String>] [-WhatIf] [-Confirm]
```

### AccessToken
```
Connect-MicrosoftTeams [-TenantId <String>] -AadAccessToken <String> [-MsAccessToken <String>]
 -AccountId <String> [-LogLevel <LogLevel>] [-LogFilePath <String>] [-WhatIf] [-Confirm]
```

## DESCRIPTION

## EXAMPLES

## PARAMETERS

### -AadAccessToken
Specifies a Azure Active Directory Graph access token.

```yaml
Type: String
Parameter Sets: AccessToken
Aliases: 
Applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AccountId
Specifies the ID of an account. You must specify the UPN of the user when authenticating with a user access token.

```yaml
Type: String
Parameter Sets: UserCredential
Aliases: 
Applicable: Microsoft Teams

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
Applicable: Microsoft Teams

Required: False
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
Applicable: Microsoft Teams

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
Applicable: Microsoft Teams

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
Applicable: Microsoft Teams

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -Credential
Specifies a **PSCredential** object.
For more information about the **PSCredential** object, type Get-Help Get-Credential.

The **PSCredential** object provides the user ID and password for organizational ID credentials.

```yaml
Type: PSCredential
Parameter Sets: UserCredential
Aliases: 
Applicable: Microsoft Teams

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
Applicable: Microsoft Teams

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
Applicable: Microsoft Teams

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
Applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TenantId
Specifies the ID of a tenant.

If you do not specify this parameter, the account is authenticated with the home tenant.

You must specify the *TenantId* parameter to authenticate as a service principal or when using Microsoft account.

```yaml
Type: String
Parameter Sets: UserCredential, AccessToken
Aliases: Domain, TenantDomain
Applicable: Microsoft Teams

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
Applicable: Microsoft Teams

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
Applicable: Microsoft Teams

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS


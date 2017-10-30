---
external help file: Microsoft.TeamsCmdlets.PowerShell.Custom.dll-Help.xml
Module Name: MicrosoftTeams
applicable: Microsoft Teams
title: Add-TeamUser
online version: 
schema: 2.0.0
---

# Add-TeamUser

## SYNOPSIS
Note: This cmdlet is currently in Beta.

Adds an owner or member to the team.

## SYNTAX

```
Add-TeamUser -GroupId <String> -User <String> [-Role <String>]
```

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

### -TenantId
@{Text=}

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

### -Credential
@{Text=}

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

### -AccountId
@{Text=}

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

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LogLevel
@{Text=}

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

### -LogFilePath
@{Text=}

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

### -WhatIf
@{Text=}

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
Applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
@{Text=}

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CertificateThumbprint
@{Text=}

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

### -ApplicationId
@{Text=}

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

### -AadAccessToken
@{Text=}

```yaml
Type: String
Parameter Sets: AccessToken
Aliases:
Applicable: Microsoft Teams

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MsAccessToken
@{Text=}

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

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS


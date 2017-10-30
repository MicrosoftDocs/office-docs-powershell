---
external help file: 
applicable: Skype for Business Online
title: Set-CsHybridMediationServer
schema: 2.0.0
---

# Set-CsHybridMediationServer

## SYNOPSIS
Sets the external FQDN of an Edge server access proxy as the hosting provider for a user.

## SYNTAX

```
Set-CsHybridMediationServer [[-Identity] <Object>] [-AccessProxyExternalFqdn <Object>] [-Fqdn <Object>]
 [-Confirm] [-Tenant <Object>] [-WhatIf] [-AsJob] [<CommonParameters>]
```

## DESCRIPTION
The `Set-CsHybridMediationServer` cmdlet provides FQDN settings for users.
Use this command to register mediation serviers from on-prem on O365 and point them to access proxy (Edge server) from on-prem.
Then the existing Skype for Business online call routing mechanism can establish the conference.

This cmdlet will set the Edge server Access Proxy external FQDN as the hosting provider of the user whose name equals to the FDQN parameter.
Users must be retrieved by their identity and they cannot already have assigned licenses.

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Set-CsHybridMediationServer -Fqdn users.fabrikam.com -AccessProxyExternalFqdn mediationserver.Contoso.com
```

This command sets the FQDN of a mediation server.


## PARAMETERS

### -AccessProxyExternalFqdn
The fully qualified domain name of the Edge server's access proxy.

```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Fqdn
Specifies the fully qualified domain name of the mediation server that includes the internal Active Directory domain, such as mediationserver.contoso.com

```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
Specifies the identity of the hybrid public switched telephone network (PSTN) site.
For example: `-Identity "SeattlePSTN"`.

```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
The Confirm switch causes the command to pause processing and requires confirmation to proceed.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Tenant
Specifies the globally unique identifier (GUID) of your Skype for Business Online tenant account.
For example: `-Tenant "38aad667-af54-4397-aaa7-e94c79ec2308"`.
You can find your tenant ID by running this command: `Get-CsTenant | Select-Object DisplayName, TenantID`

If you are using a remote session of Windows PowerShell and are connected only to Skype for Business Online, you do not have to include the Tenant parameter.
The tenant ID will be determined by your connection and credentials.
The Tenant parameter is primarily for use in a hybrid deployment.

```yaml
Type: Object
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
The WhatIf switch causes the command to simulate its results.
By using this switch, you can view what changes would occur without having to commit those changes.

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

### -AsJob
{{Fill AsJob Description}}

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

[Get-CsHybridMediationServer](Get-CsHybridMediationServer.md)

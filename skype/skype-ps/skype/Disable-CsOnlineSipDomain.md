---
external help file: Microsoft.Rtc.Management.dll-help.xml
applicable: Skype for Business Online
title: Disable-CsOnlineSipDomain
schema: 2.0.0
---

# Disable-CsOnlineSipDomain

## SYNOPSIS
**THIS IS PRELIMINARY DOCUMENTATION OF UPCOMING FUNCTIONALITY**
These cmdlets are only for use by complex organizations having multiple on-premises deployments of Skype for Business Server or Lync Server. By using Disable-CsOnlineSipDomain as described below, organizations can safely synchronize users from multiple on-premises forests  containing Skype for Business Server into a single Office 365 tenant.  Note however, only 1 on-premise tenant can be in hybrid mode at a time.  Users in the non-hybrid forests would continue to be served by their on-premises deployment of Skype for Business Server (or Lync Server).
## SYNTAX

```
Disable-CsOnlineSipDomain -Domain <String> [-Tenant <System.Guid>] [-DomainController <String>] [-Force]
 [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
*This cmdlet is useful for organizations with multiple on-premises deployments of Skype for Business Server (or Lync Server).* If an organization intends to configure hybrid for 1 of those deployments, then this cmdlet must be run for all sip domains in any other on-premises deployment(s).

This cmdlet may also be useful for organizations with on-premises deployments of Skype for Business Server that have not properly configured Azure AD Connect. If the organization does not sync msRTCSIP-DeploymentLocator for its users, then Skype for Business Online will attempt to provision users online, despite there being users on-premises.  While the correct fix is to update the configuration for Azure AD Connect to sync those attributes, using Disable-CsOnlineSipDomain, can also mitigate the problem until that configuration change can be made.  If this comdlet is run, any users that were previously provisioned online in that domain will be de-provisioned in Skype for Business Online.


## EXAMPLES

### Example 1
```powershell
PS C:\> Disable-CsOnlineSipDomain -Domain  Fabrikam.com
```

The cmdlet above disables the online sip domain Fabrikam.com.  This would be useful in the case where a company, Contoson.com, that  has Skype for Business acquires Fabkrikam, which also has an on-premises deployment of Skype for Business Server.  If Contoso is in hybrid mode with Skype for Business Online. or if the intent is to configure it for hybrid, then if the organization wants to synchroize identities from Fabrikam.com into the same O365 tenant, the organization must first run this cmdlet.

## PARAMETERS

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

### -Domain
{{Fill Domain Description}}

```yaml
Type: String
Parameter Sets: (All)
Aliases:
applicable: Skype for Business Online
Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController
{{Fill DomainController Description}}

```yaml
Type: String
Parameter Sets: (All)
Aliases: DC
applicable: Skype for Business Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
{{Fill Force Description}}

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
applicable: Skype for Business Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Tenant
{{Fill Tenant Description}}

```yaml
Type: System.Guid
Parameter Sets: (All)
Aliases:
applicable: Skype for Business Online
Required: False
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
applicable: Skype for Business Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable.
For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### None

## OUTPUTS

### System.Object
## NOTES
This cmdlets is for advanced scenarios only.  Organizations that are pure online or have only 1 on-premise deployment need not run this cmdlet.

## RELATED LINKS

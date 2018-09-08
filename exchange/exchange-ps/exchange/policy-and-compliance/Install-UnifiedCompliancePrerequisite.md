---
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
applicable: Office 365 Security & Compliance Center
title: Install-UnifiedCompliancePrerequisite
schema: 2.0.0
monikerRange: "o365scc-ps"
---

# Install-UnifiedCompliancePrerequisite

## SYNOPSIS
This cmdlet is available only in the Office 365 Security & Compliance Center. For more information, see Office 365 Security & Compliance Center PowerShell (https://technet.microsoft.com/library/mt587091.aspx).

Use the Install-UnifiedCompliancePrerequisite cmdlet to view, create, or configure the Compliance Policy Center in Microsoft SharePoint Online. The Compliance Policy Center is a site collection that's used by the Security & Compliance Center to store preservation policies that act on content in SharePoint Online sites.

Typically, you don't need to run this cmdlet. You use this cmdlet for troubleshooting and diagnostics.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

### Set1
```
Install-UnifiedCompliancePrerequisite [-ForceInitialize] [-PolicyCenterSiteOwner <SmtpAddress>]
 [<CommonParameters>]
```

### Set2
```
Install-UnifiedCompliancePrerequisite [-LoadOnly] [<CommonParameters>]
```

## DESCRIPTION
This cmdlet returns the following information about the Compliance Policy Center:

- SharepointRootSiteUrl: This value is typically `https://<domain>.onmicrosoft.com/`.

- SharepointTenantAdminUrl: This value uses the format `https://<domain>-admin.onmicrosoft.com/`.

- SharepointSuccessInitializedUtc: The time that the Compliance Policy Center was last initialized in coordinated universal time (UTC).

- SharepointPolicyCenterSiteUrl: This value is typically `https://<domain>.onmicrosoft.com/sites/compliancepolicycenter`.

You need to be assigned permissions in the Office 365 Security & Compliance Center before you can use this cmdlet. For more information, see Permissions in Office 365 Security & Compliance Center (https://go.microsoft.com/fwlink/p/?LinkId=511920).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Install-UnifiedCompliancePrerequisite
```

This example creates the Compliance Policy Center in SharePoint Online. If it has already been created, the command displays the current configuration information.

### -------------------------- Example 2 --------------------------
```
Install-UnifiedCompliancePrerequisite -LoadOnly
```

This example loads the Compliance Policy Center using the current settings.

### -------------------------- Example 3 --------------------------
```
Install-UnifiedCompliancePrerequisite -ForceInitialize
```

This example recreates the Compliance Policy Center, even if the site has already been created.

## PARAMETERS

### -ForceInitialize
The ForceInitialize switch recreates the Compliance Policy Center, even if it has already been created. You don't specify a value with this switch.

You can't use this switch with the LoadOnly switch.

```yaml
Type: SwitchParameter
Parameter Sets: Set1
Aliases:
Applicable: Office 365 Security & Compliance Center
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LoadOnly
The LoadOnly switch loads the current settings of the Compliance Policy Center. You don't specify a value with this switch.

You can't use this switch with the ForceInitialize switch.

```yaml
Type: SwitchParameter
Parameter Sets: Set2
Aliases:
Applicable: Office 365 Security & Compliance Center
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PolicyCenterSiteOwner
The PolicyCenterSiteOwner parameter specifies the email address of the owner of the Compliance Policy Center. You can use this parameter by itself or with the ForceInitialize switch.

```yaml
Type: SmtpAddress
Parameter Sets: Set1
Aliases:
Applicable: Office 365 Security & Compliance Center
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

[Online Version](https://technet.microsoft.com/library/bd658b86-a548-4172-8a76-36c1508b72b5.aspx)

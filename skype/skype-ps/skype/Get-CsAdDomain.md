---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019
title: Get-CsAdDomain
schema: 2.0.0
---

# Get-CsAdDomain

## SYNOPSIS
Returns information indicating whether Active Directory Domain Services has been correctly configured to allow for the installation of Skype for Business Server.
This cmdlet was introduced in Lync Server 2010.


## SYNTAX

```
Get-CsAdDomain [-Domain <Fqdn>] [-DomainController <Fqdn>] [-GlobalCatalog <Fqdn>]
 [-GlobalSettingsDomainController <Fqdn>] [-Report <String>] [<CommonParameters>]
```

## DESCRIPTION
Before you can install Skype for Business Server your domain must be correctly prepared, a process that includes extending the Active Directory schema to allow for the addition of attributes specific to Skype for Business Server, in addition to assigning the required Access Control Entries to the universal groups used for managing and operating Skype for Business Server.
The Get-CsAdDomain cmdlet returns a single value that tells you whether or not Skype for Business Server can be installed on a domain.
If the Get-CsAdDomain cmdlet returns the value LC_DOMAINSETTINGS_STATE_READY then you can install Skype for Business Server on that domain.
If the cmdlet returns LC_DOMAINSETTINGS_STATE_NOT_READY then you will need to correctly prepare the domain before trying to install Skype for Business Server.

The Get-CsAdDomain cmdlet runs as part of the Setup Wizard.
If the Wizard determines that the domain is not correctly prepared, an error message is displayed and setup will stop.
However, you can run the Get-CsAdDomain cmdlet independently of the Setup Wizard in order to verify the domain status before you try to install Skype for Business Server.

By default, any user who has read permissions to Active Directory can run the Get-CsAdDomain cmdlet.
Typically all domain members have this permission.

`Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Get-CsAdDomain"}`

Historical Note: Get-CsAdDomain performs the same function as the following Microsoft Office Communications Server 2007 R2 command:

`lcscmd.exe /domain /action:CheckDomainPrepState`


## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-CsAdDomain
```

Example 1 returns information regarding the current status of your local Active Directory domain.
If your domain settings are up-to-date, and the domain is ready to host Skype for Business Server, the value LC_DOMAIN_SETTINGS_STATE_READY will be returned.

### -------------------------- Example 2 --------------------------
```
Get-CsAdDomain -Domain "fabrikam.com"
```

The command shown in Example 2 returns the current status of a specific domain: fabrikam.com.
In a multi-domain environment, you can return information for a given domain by including the Domain parameter.

### -------------------------- Example 3 --------------------------
```
Get-CsAdDomain -Report "C:\Logs\DomainReport.html"
```

Example 3 retrieves the current status of your Active Directory domain and, at the same time, writes information about that status to a file named C:\Logs\DomainReport.html.
This file will detail the steps taken by the Get-CsAdDomain cmdlet to determine the readiness status for the domain.
Those steps include tasks such as verifying the existence of Active Directory groups and checking permission settings on various Active Directory containers.


## PARAMETERS

### -Domain
Fully qualified domain name (FQDN) of the domain to be checked; for example: -Domain "litwareinc.com".
If this parameter is not specified, then the local domain will be checked.

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController
Enables administrators to specify the FQDN of the domain controller to be used when running the Get-CsAdDomain cmdlet.
If not specified, the cmdlet will use the first available domain controller.

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -GlobalCatalog
FQDN of a global catalog server in your domain.
This parameter is not required if you are running the Get-CsAdDomain cmdlet on a computer with an account in your domain.

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -GlobalSettingsDomainController
FQDN of a domain controller where global settings are stored.
If global settings are stored in the System container in Active Directory, then this parameter must point to the root domain controller.
If global settings are stored in the Configuration container, then any domain controller can be used and this parameter can be omitted.

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Report
Enables you to specify a file path for the log file created when the cmdlet runs.
For example: 

`-Report "C:\Logs\DomainPrep.html"`

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).


## INPUTS

### None


## OUTPUTS

### Microsoft.Rtc.Management.Deployment.LcDomainSettingsState


## NOTES


## RELATED LINKS

[Disable-CsAdDomain](Disable-CsAdDomain.md)

[Enable-CsAdDomain](Enable-CsAdDomain.md)


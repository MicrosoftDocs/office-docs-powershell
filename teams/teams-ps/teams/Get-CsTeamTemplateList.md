---
external help file: Microsoft.Teams.ConfigAPI.Cmdlets-help.xml
Module Name: Microsoft.Teams.ConfigAPI.Cmdlets
online version: https://docs.microsoft.com/en-us/powershell/module/teams/get-csteamtemplatelist
title: Get-CsTeamTemplateList
author: levdavid
ms.author: legorbun
ms.reviewer: 
manager: farahf
schema: 2.0.0
---

# Get-CsTeamTemplateList

## SYNOPSIS

This cmdlet supports retrieving information of all team templates available to your tenant, including both first party Microsoft team templates as well as custom templates. The templates information retrieved includes includes OData Id, template name, short description, count of channels and count of applications.  
Note: All custom templates will be retrieved, regardless of the locale specification. If you have hidden templates in the admin center, you will still be able to see the hidden templates here.

## SYNTAX

### Get (Default)

```powershell
Get-CsTeamTemplateList -Locale <String> [-Break] [-HttpPipelineAppend <SendAsyncStep[]>]
 [-HttpPipelinePrepend <SendAsyncStep[]>] [-Proxy <Uri>] [-ProxyCredential <PSCredential>]
 [-ProxyUseDefaultCredentials] [<CommonParameters>]
```

### GetViaIdentity

```powershell
Get-CsTeamTemplateList -InputObject <IConfigApiBasedCmdletsIdentity> [-Break]
 [-HttpPipelineAppend <SendAsyncStep[]>] [-HttpPipelinePrepend <SendAsyncStep[]>] [-Proxy <Uri>]
 [-ProxyCredential <PSCredential>] [-ProxyUseDefaultCredentials] [<CommonParameters>]
```

## DESCRIPTION

Get a list of available team templates

## EXAMPLES

### EXAMPLE 1

```powershell
Get-CsTeamTemplateList -Locale en-US
```

Returns all en-US templates within the universe of templates the admin’s tenant has access to.

Note: All 1P Microsoft templates will always be returned in the specified locale.

```powershell
OdataId                                                         Name                           ShortDescription                 Chann AppCo
                                                                                                                                elCou unt
                                                                                                                                nt
-------                                                         ----                           ----------------                 ----- -----
/api/teamtemplates/v1.0/healthcareWard/Public/en-US             Collaborate on Patient Care    Collaborate on patient care i... 6     1
/api/teamtemplates/v1.0/healthcareHospital/Public/en-US         Hospital                       Facilitate collaboration with... 6     1
/api/teamtemplates/v1.0/retailStore/Public/en-US                Organize a Store               Collaborate with your retail ... 3     1
/api/teamtemplates/v1.0/retailManagerCollaboration/Public/en-US Retail - Manager Collaboration Collaborate with managers acr... 3     1
```

### EXAMPLE 2

```powershell
(Get-CsTeamTemplateList -Locale en-US) | where ChannelCount -GT 3
```

Returns all en-US templates that have 3 channels within the universe of templates the admin’s tenant has access to.

```powershell
OdataId                                                 Name                           ShortDescription                 Chann AppCo
                                                                                                                        elCou unt
                                                                                                                        nt
-------                                                 ----                           ----------------                 ----- -----
/api/teamtemplates/v1.0/healthcareWard/Public/en-US     Collaborate on Patient Care    Collaborate on patient care i... 6     1
/api/teamtemplates/v1.0/healthcareHospital/Public/en-US Hospital                       Facilitate collaboration with... 6     1
```

## PARAMETERS

### -Locale

The language and country code of templates localization.

```yaml
Type: String
Parameter Sets: Get
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -InputObject

Identity Parameter
To construct, see NOTES section for INPUTOBJECT properties and create a hash table.

```yaml
Type: IConfigApiBasedCmdletsIdentity
Parameter Sets: GetViaIdentity
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -Break

Wait for .NET debugger to attach

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -HttpPipelineAppend

SendAsync Pipeline Steps to be appended to the front of the pipeline

```yaml
Type: SendAsyncStep[]
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -HttpPipelinePrepend

SendAsync Pipeline Steps to be prepended to the front of the pipeline

```yaml
Type: SendAsyncStep[]
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Proxy

The URI for the proxy server to use

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

### -ProxyCredential

Credentials for a proxy server to use for the remote call

```yaml
Type: PSCredential
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ProxyUseDefaultCredentials

Use the default credentials for the proxy

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters

This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### Microsoft.Teams.ConfigAPI.Cmdlets.Generated.Models.IConfigApiBasedCmdletsIdentity

## OUTPUTS

### Microsoft.Teams.ConfigAPI.Cmdlets.Generated.Models.IErrorObject

### Microsoft.Teams.ConfigAPI.Cmdlets.Generated.Models.ITeamTemplateSummary

## NOTES

COMPLEX PARAMETER PROPERTIES

To create the parameters described below, construct a hash table containing the appropriate properties.\
For information on hash tables, run Get-Help about_Hash_Tables.\
\
INPUTOBJECT \<IConfigApiBasedCmdletsIdentity\>: Identity Parameter\
\[Bssid \<String\>\]:\
\[ChassisId \<String\>\]:\
\[CivicAddressId \<String\>\]: Civic address id.\
\[Country \<String\>\]:\
\[GroupId \<String\>\]: The ID of a group whose policy assignments will be returned.\
\[Id \<String\>\]:\
\[Identity \<String\>\]:\
\[Locale \<String\>\]: The language and country code of templates localization.\
\[LocationId \<String\>\]: Location id.\
\[OdataId \<String\>\]: A composite URI of a template.\
\[OperationId \<String\>\]: The ID of a batch policy assignment operation.\
\[OrderId \<String\>\]:\
\[PackageName \<String\>\]: The name of a specific policy package\
\[PolicyType \<String\>\]: The policy type for which group policy assignments will be returned.\
\[Port \<String\>\]:\
\[PortInOrderId \<String\>\]:\
\[SubnetId \<String\>\]:\
\[TenantId \<String\>\]:\
\[UserId \<String\>\]: UserId.\
Supports Guid.\
Eventually UPN and SIP.\

## RELATED LINKS

- [Get-CsTeamTemplateList](https://docs.microsoft.com/en-us/powershell/module/teams/get-csteamtemplatelist)
- [Get-CsTeamTemplate](https://docs.microsoft.com/en-us/powershell/module/teams/get-csteamtemplate)
- [New-CsTeamTemplate](https://docs.microsoft.com/en-us/powershell/module/teams/new-csteamtemplate)
- [Update-CsTeamTemplate](https://docs.microsoft.com/en-us/powershell/module/teams/update-csteamtemplate)
- [Remove-CsTeamTemplate](https://docs.microsoft.com/en-us/powershell/module/teams/remove-csteamtemplate)

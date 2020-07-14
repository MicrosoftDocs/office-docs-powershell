---
external help file:
online version: https://docs.microsoft.com/powershell/module/sharepoint-pnp/export-pnplisttoprovisioningtemplate
applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
schema: 2.0.0
title: Export-PnPListToProvisioningTemplate
---

# Export-PnPListToProvisioningTemplate

## SYNOPSIS
Exports one or more lists to provisioning template

## SYNTAX 

```powershell
Export-PnPListToProvisioningTemplate -List <String>
                                     [-Out <String>]
                                     [-Force [<SwitchParameter>]]
                                     [-OutputInstance [<SwitchParameter>]]
                                     [-Schema <XMLPnPSchemaVersion>]
                                     [-Web <WebPipeBind>]
                                     [-Connection <PnPConnection>]
```

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Export-PnPListToProvisioningTemplate -Out template.xml -List "Documents"
```

Extracts a list to a new provisioning template including the list specified by title or ID.

### ------------------EXAMPLE 2------------------
```powershell
Export-PnPListToProvisioningTemplate -Out template.pnp -List "Documents","Events"
```

Extracts a list to a new provisioning template Office Open XML file, including the lists specified by title or ID.

## PARAMETERS

### -Force
Overwrites the output file if it exists.

```yaml
Type: SwitchParameter
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -List
Specify the lists to extract, either providing their ID or their Title.

```yaml
Type: String
Parameter Sets: (All)

Required: True
Position: Named
Accept pipeline input: False
```

### -Out
Filename to write to, optionally including full path

```yaml
Type: String
Parameter Sets: (All)

Required: False
Position: 0
Accept pipeline input: False
```

### -OutputInstance
Returns the template as an in-memory object, which is an instance of the ProvisioningTemplate type of the PnP Core Component. It cannot be used together with the -Out parameter.

```yaml
Type: SwitchParameter
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -Schema
The schema of the output to use, defaults to the latest schema

```yaml
Type: XMLPnPSchemaVersion
Parameter Sets: (All)

Required: False
Position: 1
Accept pipeline input: False
```

### -Connection
Optional connection to be used by the cmdlet. Retrieve the value for this parameter by either specifying -ReturnConnection on Connect-PnPOnline or by executing Get-PnPConnection.

```yaml
Type: PnPConnection
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -Web
This parameter allows you to optionally apply the cmdlet action to a subweb within the current web. In most situations this parameter is not required and you can connect to the subweb using Connect-PnPOnline instead. Specify the GUID, server relative url (i.e. /sites/team1) or web instance of the web to apply the command to. Omit this parameter to use the current web.

```yaml
Type: WebPipeBind
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

## RELATED LINKS

[SharePoint Developer Patterns and Practices](https://aka.ms/sppnp)
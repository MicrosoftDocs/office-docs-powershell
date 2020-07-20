---
external help file:
online version: https://docs.microsoft.com/powershell/module/sharepoint-pnp/remove-pnpfileversion
applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
schema: 2.0.0
title: Remove-PnPFileVersion
---

# Remove-PnPFileVersion

## SYNOPSIS
Removes all or a specific file version.

## SYNTAX 

### All
```powershell
Remove-PnPFileVersion -Url <String>
                      [-All [<SwitchParameter>]]
                      [-Recycle [<SwitchParameter>]]
                      [-Force [<SwitchParameter>]]
                      [-Web <WebPipeBind>]
                      [-Connection <PnPConnection>]
```

### By Id
```powershell
Remove-PnPFileVersion -Url <String>
                      [-Identity <FileVersionPipeBind>]
                      [-Recycle [<SwitchParameter>]]
                      [-Force [<SwitchParameter>]]
                      [-Web <WebPipeBind>]
                      [-Connection <PnPConnection>]
```

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Remove-PnPFileVersion -Url Documents/MyDocument.docx -Identity 512
```

Removes the file version with Id 512

### ------------------EXAMPLE 2------------------
```powershell
Remove-PnPFileVersion -Url Documents/MyDocument.docx -Identity "Version 1.0"
```

Removes the file version with label "Version 1.0"

### ------------------EXAMPLE 3------------------
```powershell
Remove-PnPFileVersion -Url Documents/MyDocument.docx -All
```

Removes all file versions

## PARAMETERS

### -All


Only applicable to: SharePoint Online

```yaml
Type: SwitchParameter
Parameter Sets: All

Required: False
Position: Named
Accept pipeline input: False
```

### -Force
If provided, no confirmation will be requested and the action will be performed

Only applicable to: SharePoint Online

```yaml
Type: SwitchParameter
Parameter Sets: __AllParameterSets

Required: False
Position: Named
Accept pipeline input: False
```

### -Identity


Only applicable to: SharePoint Online

```yaml
Type: FileVersionPipeBind
Parameter Sets: By Id

Required: False
Position: Named
Accept pipeline input: False
```

### -Recycle


Only applicable to: SharePoint Online

```yaml
Type: SwitchParameter
Parameter Sets: __AllParameterSets

Required: False
Position: Named
Accept pipeline input: False
```

### -Url


Only applicable to: SharePoint Online

```yaml
Type: String
Parameter Sets: __AllParameterSets

Required: True
Position: Named
Accept pipeline input: False
```

### -Connection
Optional connection to be used by the cmdlet. Retrieve the value for this parameter by either specifying -ReturnConnection on Connect-PnPOnline or by executing Get-PnPConnection.

Only applicable to: SharePoint Online

```yaml
Type: PnPConnection
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -Web
This parameter allows you to optionally apply the cmdlet action to a subweb within the current web. In most situations this parameter is not required and you can connect to the subweb using Connect-PnPOnline instead. Specify the GUID, server relative url (i.e. /sites/team1) or web instance of the web to apply the command to. Omit this parameter to use the current web.

Only applicable to: SharePoint Online

```yaml
Type: WebPipeBind
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

## RELATED LINKS

[SharePoint Developer Patterns and Practices](https://aka.ms/sppnp)
---
external help file:
online version: https://docs.microsoft.com/powershell/module/sharepoint-pnp/add-pnpfiletoprovisioningtemplate
applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
schema: 2.0.0
title: Add-PnPFileToProvisioningTemplate
---

# Add-PnPFileToProvisioningTemplate

## SYNOPSIS
Adds a file to a PnP Provisioning Template

## SYNTAX 

### Remove File
```powershell
Add-PnPFileToProvisioningTemplate -Path <String>
                                  -SourceUrl <String>
                                  [-Container <String>]
                                  [-FileLevel <FileLevel>]
                                  [-TemplateProviderExtensions <ITemplateProviderExtension[]>]
                                  [-FileOverwrite [<SwitchParameter>]]
                                  [-Web <WebPipeBind>]
                                  [-Connection <PnPConnection>]
```

### Local File
```powershell
Add-PnPFileToProvisioningTemplate -Path <String>
                                  -Source <String>
                                  -Folder <String>
                                  [-Container <String>]
                                  [-FileLevel <FileLevel>]
                                  [-TemplateProviderExtensions <ITemplateProviderExtension[]>]
                                  [-FileOverwrite [<SwitchParameter>]]
                                  [-Web <WebPipeBind>]
                                  [-Connection <PnPConnection>]
```

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Add-PnPFileToProvisioningTemplate -Path template.pnp -Source $sourceFilePath -Folder $targetFolder
```

Adds a file to a PnP Site Template

### ------------------EXAMPLE 2------------------
```powershell
Add-PnPFileToProvisioningTemplate -Path template.xml -Source $sourceFilePath -Folder $targetFolder
```

Adds a file reference to a PnP Site XML Template

### ------------------EXAMPLE 3------------------
```powershell
Add-PnPFileToProvisioningTemplate -Path template.pnp -Source "./myfile.png" -Folder "folderinsite" -FileLevel Published -FileOverwrite:$false
```

Adds a file to a PnP Site Template, specifies the level as Published and defines to not overwrite the file if it exists in the site.

### ------------------EXAMPLE 4------------------
```powershell
Add-PnPFileToProvisioningTemplate -Path template.pnp -Source $sourceFilePath -Folder $targetFolder -Container $container
```

Adds a file to a PnP Site Template with a custom container for the file

### ------------------EXAMPLE 5------------------
```powershell
Add-PnPFileToProvisioningTemplate -Path template.pnp -SourceUrl "Shared%20Documents/ProjectStatus.docs"
```

Adds a file to a PnP Provisioning Template retrieved from the currently connected site. The url can be server relative or web relative. If specifying a server relative url has to start with the current site url.

## PARAMETERS

### -Container
The target Container for the file to add to the in-memory template, optional argument.

```yaml
Type: String
Parameter Sets: (All)

Required: False
Position: 3
Accept pipeline input: False
```

### -FileLevel
The level of the files to add. Defaults to Published

```yaml
Type: FileLevel
Parameter Sets: (All)

Required: False
Position: 4
Accept pipeline input: False
```

### -FileOverwrite
Set to overwrite in site, Defaults to true

```yaml
Type: SwitchParameter
Parameter Sets: (All)

Required: False
Position: 5
Accept pipeline input: False
```

### -Folder
The target Folder for the file to add to the in-memory template.

```yaml
Type: String
Parameter Sets: Local File

Required: True
Position: 2
Accept pipeline input: False
```

### -Path
Filename of the .PNP Open XML site template to read from, optionally including full path.

```yaml
Type: String
Parameter Sets: (All)

Required: True
Position: 0
Accept pipeline input: False
```

### -Source
The file to add to the in-memory template, optionally including full path.

```yaml
Type: String
Parameter Sets: Local File

Required: True
Position: 1
Accept pipeline input: False
```

### -SourceUrl
The file to add to the in-memory template, specifying its url in the current connected Web.

```yaml
Type: String
Parameter Sets: Remove File

Required: True
Position: 1
Accept pipeline input: False
```

### -TemplateProviderExtensions
Allows you to specify ITemplateProviderExtension to execute while loading the template.

```yaml
Type: ITemplateProviderExtension[]
Parameter Sets: (All)

Required: False
Position: 4
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